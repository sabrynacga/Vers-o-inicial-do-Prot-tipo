/**
 * EDX Capital - API Integration Service
 * 
 * This service handles communication with the backend, 
 * specifically prepared to integrate with n8n workflows 
 * for calculations and automatic form processing.
 */

const N8N_WEBHOOK_BASE_URL = 'https://seu-n8n-dominio.com/webhook';

export const n8nService = {
  /**
   * Submit questionnaire data to n8n for processing
   */
  async submitQuestionnaire(data: Record<string, any>) {
    try {
      const response = await fetch(`${N8N_WEBHOOK_BASE_URL}/edx-comercial-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit to n8n');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error submitting questionnaire:', error);
      throw error;
    }
  },

  /**
   * Trigger the BESS + Fotovoltaico calculations
   */
  async calculateEnergyReport(clientData: any) {
    try {
      const response = await fetch(`${N8N_WEBHOOK_BASE_URL}/edx-engenharia-calc`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clientData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to calculate report');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error calculating report:', error);
      throw error;
    }
  },
  
  /**
   * Submit approval or rejection of an indication
   */
  async submitAnalysisDecision(indicationId: string, approved: boolean, observation: string) {
    try {
      const response = await fetch(`${N8N_WEBHOOK_BASE_URL}/edx-engenharia-decision`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ indicationId, approved, observation }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit decision');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error submitting decision:', error);
      throw error;
    }
  }
};

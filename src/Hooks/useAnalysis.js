import { useState } from 'react';
import { toast } from 'sonner';

export const useAnalysis = (onSuccess) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const analyzeImage = async (file, metadata = {}) => {
    setLoading(true);
    setError(null);
    const toastId = toast.loading("Analyzing photo composition...");

    try {
      const base64 = await convertToBase64(file);
     const response = await fetch('http://localhost:5000/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: base64, ...metadata }),
      });

      if (!response.ok) throw new Error("AI Analysis failed");

      const results = await response.json();
      
      toast.success("Analysis complete", { id: toastId });
      if (onSuccess) onSuccess(results, base64);
      
    } catch (err) {
      setError(err.message);
      toast.error(err.message, { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  return { analyzeImage, loading, error };
};
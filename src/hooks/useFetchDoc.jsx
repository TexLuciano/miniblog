import { db } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export const useFetchDoc = (docCollection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    async function loadDoc() {
      if (cancelled) return;
      setLoading(true);

      try {
        const docRef = await doc(db, docCollection, id);
        const docSanp = await getDoc(docRef);
        setDocument(docSanp.data());
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error.message);
        setLoading(false);
      }
    }

    loadDoc();
  }, [docCollection,id, cancelled]);



  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { document, loading, error };
};

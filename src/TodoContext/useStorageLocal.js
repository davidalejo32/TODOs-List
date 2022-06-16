import React from "react";

const useStorageLocal = (name, initialValue) => {
  
  const [valueLocal, setValueLocal] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const getLocalStorage = localStorage.getItem(name);

        let parseItems;
  
        if (!getLocalStorage) {
          localStorage.setItem(name, JSON.stringify(initialValue));
          parseItems = initialValue;
        } else {
          parseItems = JSON.parse(getLocalStorage);
        }
  
        setValueLocal(parseItems);
        setLoading(false);
      
      } catch (error) {
        setError(true)
      }
    }, 1000);
  });

  const saveItem = (newItem) => {
    try {
      const newItemString = JSON.stringify(newItem);
      localStorage.setItem(name, newItemString);
      setValueLocal(newItem);
    } catch (error) {
      setError(true)
    }
  };

  return { valueLocal, saveItem, loading, error};
};

export { useStorageLocal }
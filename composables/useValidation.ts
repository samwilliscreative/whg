const useValidation = () => {
  const testValidationRequired = (value: null | string | number): boolean => {
    return !!value;
  };

  const testValidationMinChars = (value: null | string | number): boolean => {
    return (value?.toString().length || 0) >= 2;
  };

  const testValidationEmail = (value: null | string | number): boolean => {
    return !!String(value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return {
    testValidationRequired,
    testValidationMinChars,
    testValidationEmail,
  };
};

export default useValidation;

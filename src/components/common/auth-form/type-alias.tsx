export type InputFields = {
  label: string;
  type: string;
  name: string;
  errorMessage: string;
  isValid: boolean;
  required: boolean;
  getValidation: (value: string) => {};
};

export interface navigation {
  navigationText: string;
  navigationPath: string;
  navigation: string;
}

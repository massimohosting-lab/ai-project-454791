export interface PageType {
  title: string;
  path: string;
  component: React.FC;
}

export interface TableProps {
  data: any[];
  columns: string[];
}

export interface FormProps {
  initialValues: Record<string, any>;
  onSubmit: (values: Record<string, any>) => void;
}

// Add more types as needed for different modules/components

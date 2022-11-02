import DefaultTextField, { DefaultTextFieldProps } from '../defaultTextField';

type Props = {
  debounceTimeSecs?: number;
  onTextChanged: (text: string | null) => void;
};

export default function SearchableField({
  onTextChanged,
  debounceTimeSecs = 500,
  ...props
}: Props & DefaultTextFieldProps) {
  let timeout: NodeJS.Timeout;

  const onChange = (query: string | null) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      onTextChanged(query);
    }, debounceTimeSecs);
  };

  return (
    <DefaultTextField
      {...props}
      onChangeText={(text) => {
        onChange(text || null);
      }}
    />
  );
}

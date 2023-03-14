import { useRef } from 'react';

type CheckBoxFieldProps = {
	label : string;
}

export default function CheckBoxField({ label }: CheckBoxFieldProps) {
  const id = useRef(`checkbox-${label}`.replace(/ /g, '-').toLowerCase());

  return (
    <div>
      <input type="checkbox" id={id.current} />
      <label htmlFor={id.current}>{label}</label>
    </div>
  );
}

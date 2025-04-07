export function Checkbox({ label, ...props }) {
  return (
    <label className="inline-flex items-center text-white">
      <input type="checkbox" className="form-checkbox mr-2" {...props} />
      {label}
    </label>
  );
}

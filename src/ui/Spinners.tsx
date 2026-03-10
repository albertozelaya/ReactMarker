export default function Spinner() {
  return <span className="loader" />;
}

export function SpinnerButton() {
  return (
    <span className="border-button box-border inline-block h-5 w-5 animate-spin rounded-full border-4 border-b-gray-50" />
  );
}

interface ErrorValidationParams {
  error: string;
}

export function ErrorForm({ error }: ErrorValidationParams) {
  return <p className="mt-4 text-sm text-red-500 2xl:text-base">{error}</p>;
}

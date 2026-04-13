import "../css/backgroundLayout.css";

export default function BackgroundLayout() {
  return (
    <div className="h-ull pointer-events-none absolute inset-0 w-full overflow-hidden">
      <div className="circle-float-1 absolute -top-15 -left-15 h-72 w-72 rounded-full bg-sky-400 opacity-20 blur-3xl" />

      <div className="circle-float-2 absolute -right-10 -bottom-10 h-96 w-96 rounded-full bg-sky-300 opacity-15 blur-3xl" />

      <div className="circle-float-3 bg-main-gradient absolute top-1/2 -right-20 h-64 w-64 rounded-full opacity-10 blur-3xl" />

      <div className="circle-float-4 bg-main absolute bottom-1/3 -left-16 h-80 w-80 rounded-full opacity-10 blur-3xl" />
    </div>
  );
}

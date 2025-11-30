type LoadingProps = {
  fullscreen?: boolean;
};

const Loading = ({ fullscreen = false }: LoadingProps) => {
  const base = "flex items-center justify-center gap-3";
  const wrapperClass = fullscreen
    ? `${base} fixed inset-0 z-50 bg-background/60 backdrop-blur-sm`
    : base;
  return (
    <div className={wrapperClass}>
      <span className="text-lg text-muted-foreground">در حال بارگذاری ...</span>

      <div className="h-7 w-7 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" />
    </div>
  );
};

export default Loading;

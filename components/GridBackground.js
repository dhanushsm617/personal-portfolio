export default function GridBackground() {
  return (
    <div className="absolute inset-0 opacity-[0.06]">
      <div
        className="h-full w-full"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
        `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
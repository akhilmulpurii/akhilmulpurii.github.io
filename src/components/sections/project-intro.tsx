interface ProjectIntroProps {
  description: string;
  strokeColor: string;
}

export function ProjectIntro({ description, strokeColor }: ProjectIntroProps) {
  return (
    <div
      className="max-w-7xl mx-auto px-6 py-24 md:py-40 border-l ml-6 md:ml-20 lg:ml-40 transition-colors duration-700"
      style={{ borderColor: strokeColor }}
    >
      <p className="text-2xl md:text-4xl lg:text-5xl font-serif leading-tight max-w-4xl">
        {description}
      </p>
    </div>
  );
}


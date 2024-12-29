import { Brain, MessageSquare, LineChart } from "lucide-react";

const features = [
  {
    name: "AI-Powered Interviews",
    description:
      "Experience realistic interviews with our advanced AI that adapts to your responses.",
    icon: Brain,
  },
  {
    name: "Instant Feedback",
    description:
      "Get detailed feedback on your answers, body language, and speaking pace in real-time.",
    icon: MessageSquare,
  },
  {
    name: "Progress Tracking",
    description:
      "Monitor your improvement over time with detailed performance analytics.",
    icon: LineChart,
  },
];

export const Features = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything You Need to Succeed
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our AI-powered platform provides all the tools you need to ace your
            next interview.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-6 rounded-lg bg-primary/10 p-4">
                  <feature.icon className="h-6 w-6 text-blue-700" />
                </div>
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

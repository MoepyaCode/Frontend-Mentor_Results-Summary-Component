import { Container, Main, Wrapper } from "./components";
import { icons } from "./assets";

type SummaryProps = {
  title: string;
  score: number;
  svg: string;
  colors?: {
    background: string;
    title: string;
  };
};

const summaries: SummaryProps[] = [
  {
    title: "Reaction",
    score: 80,
    svg: icons.reaction,
    colors: {
      background: "hsl(0, 100%, 67%, 0.05)",
      title: "#FF5555",
    },
  },
  {
    title: "Memory",
    score: 92,
    svg: icons.memory,
    colors: {
      background: "hsl(39, 100%, 56%, 0.05)",
      title: "#FFB21E",
    },
  },
  {
    title: "Verbal",
    score: 61,
    svg: icons.verbal,
    colors: {
      background: "hsl(166, 100%, 37%, 0.05)",
      title: "#00BB8F",
    },
  },
  {
    title: "Visual",
    score: 73,
    svg: icons.visual,
    colors: {
      background: "hsl(234, 85%, 45%, 0.05)",
      title: "#1125D6",
    },
  },
];

export default function App() {
  return (
    <Main className="grid min-w-full place-items-center bg-neutral-pale-blue">
      <Container className="flex h-full sm:max-h-[512px] w-full max-w-[736px] flex-col sm:flex-row gap-[24px] sm:gap-0 bg-neutral-white sm:rounded-3xl">
        {/* Purple Wrapper */}
        <Wrapper className="flex min-h-[356px] w-full sm:w-[50%] flex-col flex-nowrap items-center justify-evenly rounded-b-3xl sm:rounded-3xl bg-gradient-to-b from-[#7755FF] to-[#2F2CE9]">
          {/* Result */}
          <h1 className="font-hanken-grontesk text-[18px] font-bold text-neutral-light-lavender">
            Your Result
          </h1>

          {/* Score Rating */}
          <Wrapper className="to-[rgba(37, 33, 201, 0)] relative flex aspect-square w-[7.5rem] flex-col flex-nowrap items-center justify-center rounded-[50%] bg-gradient-to-b from-[#4D21C9]">
            <h2 className="font-hanken-grontesk text-[56px] font-bold leading-none text-neutral-white">
              76
            </h2>

            <p className="font-hanken-grontesk text-[16px] font-semibold text-neutral-light-lavender">
              of 100
            </p>
          </Wrapper>

          <p className="font-hanken-grontesk text-[24px] font-bold text-neutral-white">
            Great
          </p>

          <p className="w-[75%] text-center font-hanken-grontesk text-[16px] font-medium text-neutral-light-lavender">
            Your performance exceed 65% of the people conducting the test here!
          </p>
        </Wrapper>

        {/* White Wrapper */}
        <Wrapper className="mx-[30px] sm:mx-[40px] mb-[24px] sm:mb-0 flex flex-col flex-nowrap gap-[24px] sm:self-center flex-grow-[1]">
          <h2 className="font-hanken-grontesk text-[18px] font-bold text-neutral-dark-gray-blue">
            Summary
          </h2>

          <ul className="flex w-full flex-col gap-[16px]">
            {summaries.map((summary, index) => (
              <li
                style={{backgroundColor: summary.colors?.background}}
                className="flex h-[56px] w-full flex-row items-center justify-between rounded-lg bg-slate-400 px-4"
                key={index}
              >
                <div className="flex flex-row items-center justify-between gap-4">
                  <img src={summary.svg} alt={summary.title} />
                  <span style={{color: summary.colors?.title}}>{summary.title}</span>
                </div>

                <p className="font-hanken-grontesk text-[16px] font-bold text-neutral-dark-gray-blue">
                  <span className="">
                    {summary.score} {/*  */}
                  </span>
                  {/*  */}
                  <span className="opacity-50">/ 100</span>
                </p>
              </li>
            ))}
          </ul>

          <button className="h-[56px] rounded-full bg-neutral-dark-gray-blue text-neutral-white">
            Continue
          </button>
        </Wrapper>
      </Container>
    </Main>
  );
}

import { tncContent } from '../../../components/tnc/tnc-content';

const TermsAndConditionsPage = () => {
  return (
    <main className="flex flex-col items-start justify-center -mt-6 mb-12 px-4 md:px-36">
      <h1 className="text-3xl md:text-4xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4 md:mb-6 w-full text-center md:max-w-screen-2xl mx-auto">
        Terms & Conditions
      </h1>
      {tncContent.map((item) => {
        return (
          <div
            className="my-4 text-neutral-700 dark:text-neutral-300 font-normal text-lg"
            key={item.id}
          >
            <p>{item.description}</p>
            {item.points?.map((point) => {
              return (
                <p className="my-2" key={point.id}>
                  {point.id}
                  {'. '}
                  {point.description}
                </p>
              );
            })}
          </div>
        );
      })}
    </main>
  );
};

export default TermsAndConditionsPage;

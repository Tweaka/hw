import * as React from 'react';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header text-center">
        <h1 className="bg-blue-600 text-5xl border-neutral-800 font-extrabold m-5 rounded-2xl">
          vite + typescript + tailwindcss Template
        </h1>
      </header>
      <div className="text-center bg-blue-200 m-5 h-screen rounded-2xl">
        <div className="p-2">
          <p className="callout">
            Edit <code>/src/routes/index.ts</code> for routes config.
          </p>
          <code> Consider adding daisyui for quick components :)</code>
          <a
            className="app-link"
            href="https://daisyui.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="underline text-green-600 ">what is daisyui ?</p>
            <p>daisyui setup (the hardest part) :</p>
            <div className="flex justify-center pt-2">
              <img
                className="rounded-2xl"
                width={400}
                src="src/images/carbon.png"
                alt="daisy-setup-instructions"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;

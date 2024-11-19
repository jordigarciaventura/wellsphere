export default function ChatIntro() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-4 py-8">
      <img
        src="/assets/IABot_pngImg.png"
        alt="Bot Icon"
        className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28"
      />

      <h1 className="mt-4 text-xl md:text-2xl lg:text-3xl">Let's chat</h1>

      <div className="mt-6 flex flex-col gap-4 text-center">
        <p className="w-full max-w-md rounded-lg bg-muted p-4 text-sm md:text-base lg:text-lg">
          Answer all your questions.
          <br />
          (Just ask me anything you like)
        </p>
        <p className="w-full max-w-md rounded-lg bg-muted p-4 text-sm md:text-base lg:text-lg">
          Conversational AI
          <br />
          (I can talk to you like a human being)
        </p>
      </div>
    </div>
  );
}

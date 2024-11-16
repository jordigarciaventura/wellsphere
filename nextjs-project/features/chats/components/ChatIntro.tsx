export default function ChatIntro() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-white px-4 py-8">
      {/* Imagem do Bot */}
      <img
        src="/assets/IABot_pngImg.png"
        alt="Bot Icon"
        className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
      />

      {/* Título "Let's chat" */}
      <h1 className="text-xl md:text-2xl lg:text-3xl text-[#BFC8E8] mt-4">
        Let's chat
      </h1>

      {/* Descrição */}
      <div className="flex flex-col gap-4 mt-6 text-center">
        <p className="bg-[#E5EAFC] text-[#2E3A59] rounded-lg p-4 w-full max-w-md text-sm md:text-base lg:text-lg">
          Answer all your questions.
          <br />
          (Just ask me anything you like)
        </p>
        <p className="bg-[#E5EAFC] text-[#2E3A59] rounded-lg p-4 w-full max-w-md text-sm md:text-base lg:text-lg">
          Conversational AI
          <br />
          (I can talk to you like a human being)
        </p>
      </div>
    </div>
  );
}

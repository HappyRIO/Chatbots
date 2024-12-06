import { useNavigate } from "react-router-dom"

export function Welcome() {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to My ChatBot Development Platform
        </h1>
        <p className="text-lg text-gray-600 pb-4">
          Please choose chatbot what you want!
        </p>
        <button className="bg-gradient-to-l from-slate-500 to-red-600 p-4 rounded-lg text-blue-800 text-4xl" onClick={() => navigate("/chatbase")}>Chatbase</button>
      </div>
    </div>
  )
}
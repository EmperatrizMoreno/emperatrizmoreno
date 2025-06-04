"use client";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">Bienvenido al Dashboard</h1>
      <p className="mb-6">Solo puedes ver esto si has iniciado sesión.</p>
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow transition-colors duration-300"
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default Dashboard; 
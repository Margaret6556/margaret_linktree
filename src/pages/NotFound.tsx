
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { MoveLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 p-6">
      <div className="glass rounded-2xl p-8 max-w-md w-full animate-fade-in">
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="text-xl text-muted-foreground mb-6">This page doesn't exist</p>
        <Link 
          to="/" 
          className="flex items-center text-primary hover:text-primary/90 transition-colors"
        >
          <MoveLeft size={18} className="mr-2" />
          <span>Back to home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-orange mb-4">404</h1>
          <h2 className="text-2xl font-bold text-foreground mb-2">عذراً! الصفحة غير موجودة</h2>
          <p className="text-muted-foreground">لا يمكن العثور على الصفحة التي تبحث عنها</p>
        </div>
        
        <div className="space-y-4">
          <Button asChild variant="customer" size="lg" className="w-full">
            <a href="/">
              <Home className="w-5 h-5" />
              العودة للصفحة الرئيسية
            </a>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="w-full">
            <a href="/apps-hub">
              <ArrowRight className="w-5 h-5" />
              الذهاب إلى Apps Hub
            </a>
          </Button>
        </div>
        
        <div className="mt-8 text-sm text-muted-foreground">
          <p>إذا كنت تعتقد أن هذا خطأ، يرجى الاتصال بالدعم التقني</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

import { Button } from "@/components/ui/button"
import { Search, Bell, Settings } from "lucide-react"

export const Header = () => {
  return (
    <header className="bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">عز</span>
              </div>
              <div className="text-right">
                <h1 className="text-xl font-bold text-foreground">al-azab.co</h1>
                <p className="text-sm text-orange">الإنشاءات</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-orange transition-colors">الرئيسية</a>
            <a href="#" className="text-muted-foreground hover:text-orange transition-colors">من نحن</a>
            <a href="#" className="text-muted-foreground hover:text-orange transition-colors">مشاريعنا</a>
            <a href="#" className="text-muted-foreground hover:text-orange transition-colors">خدماتنا</a>
            <a href="#" className="text-muted-foreground hover:text-orange transition-colors">اتصل بنا</a>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs">v2.1.0</span>
              <span className="text-muted-foreground">الدعم على مدار الساعة</span>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <span>العربية</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
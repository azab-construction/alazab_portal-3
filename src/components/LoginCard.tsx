import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"

interface LoginCardProps {
  title: string
  description: string
  features: string[]
  icon: LucideIcon
  variant: "customer" | "employee" | "admin"
  onClick?: () => void
}

export const LoginCard = ({ title, description, features, icon: Icon, variant, onClick }: LoginCardProps) => {
  const navigate = useNavigate()
  const cardStyles = {
    customer: "bg-customer-light border-customer/20 hover:border-customer/40",
    employee: "bg-employee-light border-employee/20 hover:border-employee/40", 
    admin: "bg-admin-light border-admin/20 hover:border-admin/40"
  }

  const iconStyles = {
    customer: "bg-customer/10 text-customer",
    employee: "bg-employee/10 text-employee",
    admin: "bg-admin/10 text-admin"
  }

  return (
    <Card className={cn("transition-all duration-300 hover:shadow-lg cursor-pointer", cardStyles[variant])}>
      <CardContent className="p-8 text-center">
        <div className={cn("w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center", iconStyles[variant])}>
          <Icon className="w-8 h-8" />
        </div>
        
        <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{description}</p>
        
        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="text-sm text-muted-foreground flex items-center justify-start gap-2">
              <span className="w-1 h-1 bg-current rounded-full"></span>
              {feature}
            </div>
          ))}
        </div>

        <Button 
          variant={variant} 
          className="w-full font-semibold"
          onClick={() => onClick ? onClick() : navigate(`/login?type=${variant}`)}
        >
          تسجيل الدخول كـ {title}
        </Button>
      </CardContent>
    </Card>
  )
}
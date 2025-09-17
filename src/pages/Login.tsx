import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { Header } from "@/components/Layout/Header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Users, UserCheck, Shield, Eye, EyeOff, ArrowRight, Lock, Mail } from "lucide-react"

const Login = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const userType = searchParams.get('type') || 'customer'
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const userTypeConfig = {
    customer: {
      title: "تسجيل دخول العملاء",
      description: "الوصول إلى خدماتك وطلباتك",
      icon: Users,
      variant: "customer" as const,
      features: ["عرض الطلبات والفواتير", "تتبع حالة المشاريع", "إدارة الملف الشخصي"]
    },
    employee: {
      title: "تسجيل دخول الموظفين", 
      description: "الوصول إلى أدوات العمل اليومية",
      icon: UserCheck,
      variant: "employee" as const,
      features: ["إدارة المهام والمشاريع", "تتبع الوقت والحضور", "التقارير والإحصائيات"]
    },
    admin: {
      title: "تسجيل دخول الإدارة",
      description: "الوصول الكامل للنظام والإعدادات",
      icon: Shield,
      variant: "admin" as const,
      features: ["إدارة المستخدمين والصلاحيات", "الإعدادات العامة", "التحليلات المتقدمة"]
    }
  }

  const config = userTypeConfig[userType as keyof typeof userTypeConfig] || userTypeConfig.customer

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate login process
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Redirect to apps hub on successful login
    navigate('/apps-hub')
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      <div className="flex items-center justify-center py-16 px-6">
        <div className="w-full max-w-md">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            className="mb-6 hover:bg-white/50"
            onClick={() => navigate('/')}
          >
            <ArrowRight className="w-4 h-4 ml-2" />
            العودة لاختيار نوع الحساب
          </Button>

          {/* Login Card */}
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-2">
              {/* Icon */}
              <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                config.variant === 'customer' ? 'bg-customer/10 text-customer' :
                config.variant === 'employee' ? 'bg-employee/10 text-employee' :
                'bg-admin/10 text-admin'
              }`}>
                <config.icon className="w-10 h-10" />
              </div>

              <CardTitle className="text-2xl font-bold text-foreground mb-2">
                {config.title}
              </CardTitle>
              <p className="text-muted-foreground">{config.description}</p>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Features List */}
              <div className="space-y-2 p-4 bg-gray-50/50 rounded-xl">
                <h4 className="font-medium text-foreground text-sm mb-3">ما يمكنك الوصول إليه:</h4>
                {config.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      config.variant === 'customer' ? 'bg-customer' :
                      config.variant === 'employee' ? 'bg-employee' :
                      'bg-admin'
                    }`}></div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    البريد الإلكتروني أو اسم المستخدم
                  </Label>
                  <div className="relative">
                    <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="ادخل بريدك الإلكتروني"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="pr-12 py-3 rounded-xl border-2 focus:border-primary"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-foreground font-medium">
                    كلمة المرور
                  </Label>
                  <div className="relative">
                    <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="ادخل كلمة المرور"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      className="pr-12 pl-12 py-3 rounded-xl border-2 focus:border-primary"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 p-0 h-auto hover:bg-transparent"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5 text-muted-foreground" /> : <Eye className="w-5 h-5 text-muted-foreground" />}
                    </Button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox 
                      id="remember"
                      checked={formData.rememberMe}
                      onCheckedChange={(checked) => handleInputChange('rememberMe', !!checked)}
                    />
                    <Label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer">
                      تذكرني
                    </Label>
                  </div>
                  <Button variant="link" className="text-sm p-0 h-auto text-primary">
                    نسيت كلمة المرور؟
                  </Button>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  variant={config.variant}
                  className="w-full py-3 text-lg font-semibold rounded-xl shadow-lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      جاري تسجيل الدخول...
                    </div>
                  ) : (
                    'تسجيل الدخول'
                  )}
                </Button>
              </form>

              {/* Help Section */}
              <Alert className="border-orange/20 bg-orange/5">
                <AlertDescription className="text-center text-sm">
                  <strong>تحتاج مساعدة؟</strong><br />
                  اتصل بالدعم التقني على: <span className="text-orange font-medium">+20 2 27047955</span><br />
                  أو راسلنا على: <span className="text-orange font-medium">support@alazab.com</span>
                </AlertDescription>
              </Alert>

              {/* Footer Links */}
              <div className="text-center space-y-2 text-sm text-muted-foreground">
                <p>ليس لديك حساب؟ <Button variant="link" className="text-primary p-0 h-auto">طلب حساب جديد</Button></p>
                <div className="flex justify-center gap-4 text-xs">
                  <Button variant="link" className="text-muted-foreground p-0 h-auto">سياسة الخصوصية</Button>
                  <span>|</span>
                  <Button variant="link" className="text-muted-foreground p-0 h-auto">شروط الاستخدام</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Login
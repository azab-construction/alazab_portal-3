import { Header } from "@/components/Layout/Header"
import { LoginCard } from "@/components/LoginCard"
import { Card, CardContent } from "@/components/ui/card"
import { Users, UserCheck, Shield, Building, Wrench, Lock, Globe } from "lucide-react"
import { useNavigate } from "react-router-dom"

const LoginSelection = () => {
  const navigate = useNavigate()

  const loginOptions = [
    {
      title: "العملاء",
      description: "للعملاء الذين يرغبون في الوصول إلى خدماتنا وطلباتهم وإدارة حساباتهم",
      features: [
        "عرض الطلبات والفواتير",
        "تتبع حالة الطلبات", 
        "إدارة الملف الشخصي"
      ],
      icon: Users,
      variant: "customer" as const,
      onClick: () => navigate('/apps-hub')
    },
    {
      title: "الموظفين", 
      description: "للموظفين للوصول إلى أدوات العمل اليومية وإدارة المهام والعمليات",
      features: [
        "إدارة العملاء والمبيعات",
        "تتبع المهام اليومية",
        "التقارير والإحصائيات"
      ],
      icon: UserCheck,
      variant: "employee" as const,
      onClick: () => navigate('/apps-hub')
    },
    {
      title: "الإدارة",
      description: "للمدراء للوصول إلى لوحة التحكم الكاملة وإدارة النظام والمستخدمين",
      features: [
        "إدارة المستخدمين والصلاحيات",
        "الإعدادات العامة للنظام",
        "التحليلات والتقارير المتقدمة"
      ],
      icon: Shield,
      variant: "admin" as const,
      onClick: () => navigate('/apps-hub')
    }
  ]

  const systemFeatures = [
    {
      title: "إدارة العملاء",
      description: "نظام شامل لإدارة العملاء والعلاقات",
      icon: Users,
      color: "bg-customer/10 text-customer"
    },
    {
      title: "إدارة الموظفين", 
      description: "أدوات متقدمة لإدارة الموارد البشرية",
      icon: UserCheck,
      color: "bg-employee/10 text-employee"
    },
    {
      title: "الأمان والحماية",
      description: "حماية متقدمة لبيانات المؤسسة",
      icon: Lock,
      color: "bg-admin/10 text-admin"
    },
    {
      title: "التكامل الكامل",
      description: "ربط جميع أقسام المؤسسة في منصة واحدة",
      icon: Globe,
      color: "bg-orange/10 text-orange"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-light px-4 py-2 rounded-full text-orange font-medium mb-6">
            <Building className="w-4 h-4" />
            نظام تخطيط موارد المؤسسة المتكامل
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Al-Azab Construction <span className="bg-orange text-white px-3 py-1 rounded-lg">ERP</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-2">نظام تخطيط موارد المؤسسة</p>
          <p className="text-orange font-medium mb-12">🔧 نظام تخطيط موارد المؤسسة المتكامل</p>

          <div className="inline-flex items-center gap-2 text-orange font-medium mb-8">
            <Wrench className="w-5 h-5" />
            اختر مستوى الوصول الخاص بك
          </div>
          
          <h2 className="text-3xl font-bold text-foreground mb-4">اختيار نوع الحساب للدخول</h2>
          <p className="text-muted-foreground mb-16 max-w-2xl mx-auto">
            يرجى اختيار نوع الحساب المناسب للوصول إلى ميزاتك المخصصة والتطبيقات
          </p>
        </div>
      </section>

      {/* Login Options */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {loginOptions.map((option, index) => (
              <LoginCard key={index} {...option} />
            ))}
          </div>
        </div>
      </section>

      {/* System Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">ميزات النظام</h2>
            <div className="w-16 h-1 bg-orange mx-auto rounded"></div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {systemFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${feature.color}`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="font-bold mb-4">Al-Azab Construction</h3>
              <div className="space-y-2 text-sm opacity-90">
                <p>📞 (+20) 1000000000</p>
                <p>📍 القاهرة الجديدة، مصر</p>
                <p>📧 البريد الإلكتروني</p>
              </div>
              <button className="bg-orange text-white px-4 py-2 rounded-lg mt-4 text-sm font-medium">
                احجز الآن
              </button>
            </div>

            {/* Page Links */}
            <div>
              <h4 className="font-semibold mb-4">روابط الصفحات</h4>
              <div className="space-y-2 text-sm opacity-90">
                <p>الرئيسية</p>
                <p>من نحن</p>
                <p>الشهادات</p>
                <p>المشاريع</p>
                <p>الخدمات</p>
                <p>العملاء</p>
                <p>المدونة</p>
                <p>اتصل بنا</p>
              </div>
            </div>

            {/* More Info */}
            <div>
              <h4 className="font-semibold mb-4">معلومات أكثر</h4>
              <div className="space-y-2 text-sm opacity-90">
                <p>الأصول التجارية</p>
                <p>تطبيق الواتساب</p>
                <p>التحميلات</p>
                <p>دعم العملاء</p>
                <p>طلب عرض سعر</p>
              </div>
            </div>

            {/* Interactive Services */}
            <div>
              <h4 className="font-semibold mb-4">الخدمات التفاعلية</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-6 h-6 bg-blue-500 rounded text-center text-xs">f</span>
                  <span>ChatHub</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-6 h-6 bg-orange rounded text-center text-xs">N</span>
                  <span>طلب صيانة جديد</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-6 h-6 bg-orange rounded text-center text-xs">T</span>
                  <span>تتبع الطلبات</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm opacity-75">
            <p>© حقوق الطبع والنشر Al-Azab Construction جميع الحقوق محفوظة</p>
            <p className="mt-2">مصمم بواسطة Alazab.dev</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LoginSelection
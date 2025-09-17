import { useState, useEffect } from "react"
import { Header } from "@/components/Layout/Header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Search, ArrowRight, Star, Grid, List, Filter, 
  Settings, Users, BarChart, FileText, Calendar,
  Mail, Phone, Camera, Globe, Shield, Database,
  Zap, Cpu, Smartphone, Monitor, Wifi, Cloud,
  Package, Truck, CreditCard, ShoppingCart,
  MessageSquare, Video, Headphones, Bookmark,
  Download, Upload, Share, Heart, Bell, Lock,
  Key, Eye, Edit, Trash, Plus, Minus,
  CheckCircle, XCircle, AlertCircle, Info,
  Home, Building, Factory, Wrench, Hammer,
  Paintbrush, Ruler, Calculator, Clipboard,
  Map, Navigation, Compass, Target, Flag,
  Clock, DollarSign, GraduationCap, TrendingUp, 
  ShoppingBag, PieChart
} from "lucide-react"

// Custom icons for missing ones
const Banknote = DollarSign
const FileBarChart = BarChart

const AppsHub = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("الكل")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [favoriteApps, setFavoriteApps] = useState<string[]>([])

  const appCategories = [
    "الكل", "إدارة المشاريع", "المحاسبة والمالية", "الموارد البشرية", 
    "المبيعات والتسويق", "المخازن", "الصيانة", "التقارير", "الأمان"
  ]

  const allApps = [
    // إدارة المشاريع
    { name: "مخطط المشاريع", category: "إدارة المشاريع", color: "bg-blue-500", icon: Calendar, description: "إدارة وتتبع المشاريع والمهام", features: ["تتبع المهام", "جدولة العمل", "إدارة الفرق"] },
    { name: "تتبع الوقت", category: "إدارة المشاريع", color: "bg-green-500", icon: Clock, description: "تسجيل وقت العمل والمهام", features: ["تسجيل الوقت", "التقارير", "الفواتير"] },
    { name: "إدارة المهام", category: "إدارة المشاريع", color: "bg-purple-500", icon: CheckCircle, description: "تنظيم وإدارة المهام اليومية", features: ["قوائم المهام", "التذكيرات", "التعاون"] },
    { name: "Gantt Chart", category: "إدارة المشاريع", color: "bg-indigo-500", icon: BarChart, description: "مخططات جانت للمشاريع", features: ["التخطيط", "التتبع", "التحليل"] },

    // المحاسبة والمالية  
    { name: "الحسابات العامة", category: "المحاسبة والمالية", color: "bg-emerald-500", icon: Calculator, description: "النظام المحاسبي الشامل", features: ["القيود المحاسبية", "الميزانية", "التقارير المالية"] },
    { name: "الفواتير", category: "المحاسبة والمالية", color: "bg-orange-500", icon: FileText, description: "إنشاء وإدارة الفواتير", features: ["فواتير احترافية", "متابعة المدفوعات", "تذكير العملاء"] },
    { name: "إدارة المصاريف", category: "المحاسبة والمالية", color: "bg-red-500", icon: CreditCard, description: "تتبع وإدارة المصاريف", features: ["تسجيل المصاريف", "الموافقات", "التقارير"] },
    { name: "التدفق النقدي", category: "المحاسبة والمالية", color: "bg-teal-500", icon: TrendingUp, description: "مراقبة التدفق النقدي", features: ["التوقعات", "التحليل", "التنبيهات"] },

    // الموارد البشرية
    { name: "شؤون الموظفين", category: "الموارد البشرية", color: "bg-blue-600", icon: Users, description: "إدارة شاملة للموظفين", features: ["ملفات الموظفين", "الحضور والانصراف", "الإجازات"] },
    { name: "كشف الرواتب", category: "الموارد البشرية", color: "bg-green-600", icon: Banknote, description: "معالجة الرواتب والأجور", features: ["حساب الرواتب", "الخصومات", "البدلات"] },
    { name: "إدارة الأداء", category: "الموارد البشرية", color: "bg-purple-600", icon: Target, description: "تقييم ومتابعة أداء الموظفين", features: ["التقييمات", "الأهداف", "التطوير"] },
    { name: "التدريب", category: "الموارد البشرية", color: "bg-yellow-600", icon: GraduationCap, description: "إدارة برامج التدريب", features: ["الدورات", "الشهادات", "المتابعة"] },

    // المبيعات والتسويق
    { name: "إدارة العملاء CRM", category: "المبيعات والتسويق", color: "bg-pink-500", icon: Users, description: "إدارة علاقات العملاء", features: ["قاعدة العملاء", "التفاعلات", "المتابعة"] },
    { name: "المبيعات", category: "المبيعات والتسويق", color: "bg-cyan-500", icon: ShoppingCart, description: "إدارة عمليات البيع", features: ["عروض الأسعار", "الطلبات", "التسليم"] },
    { name: "التسويق الإلكتروني", category: "المبيعات والتسويق", color: "bg-violet-500", icon: Globe, description: "حملات التسويق الرقمي", features: ["البريد الإلكتروني", "وسائل التواصل", "التحليلات"] },
    { name: "نقاط البيع POS", category: "المبيعات والتسويق", color: "bg-amber-500", icon: Monitor, description: "نظام نقاط البيع", features: ["المبيعات السريعة", "إدارة المخزون", "التقارير"] },

    // المخازن
    { name: "إدارة المخزون", category: "المخازن", color: "bg-slate-500", icon: Package, description: "تتبع وإدارة المخزون", features: ["الكميات", "المواقع", "التنبيهات"] },
    { name: "المشتريات", category: "المخازن", color: "bg-stone-500", icon: ShoppingBag, description: "إدارة عمليات الشراء", features: ["طلبات الشراء", "الموردين", "الاستلام"] },
    { name: "الجرد", category: "المخازن", color: "bg-neutral-500", icon: Clipboard, description: "عمليات الجرد والتدقيق", features: ["الجرد الدوري", "التسوية", "التقارير"] },
    { name: "إدارة المستودعات", category: "المخازن", color: "bg-zinc-500", icon: Building, description: "تنظيم المستودعات", features: ["المواقع", "الحركة", "التخزين"] },

    // الصيانة
    { name: "طلبات الصيانة", category: "الصيانة", color: "bg-orange-600", icon: Wrench, description: "إدارة طلبات الصيانة", features: ["الطلبات", "الأولويات", "التتبع"] },
    { name: "الصيانة الوقائية", category: "الصيانة", color: "bg-red-600", icon: Shield, description: "برامج الصيانة الوقائية", features: ["الجدولة", "التذكير", "السجلات"] },
    { name: "إدارة الأصول", category: "الصيانة", color: "bg-lime-600", icon: Factory, description: "تتبع وإدارة الأصول", features: ["سجل الأصول", "الاستهلاك", "الصيانة"] },
    { name: "فرق الصيانة", category: "الصيانة", color: "bg-emerald-600", icon: Users, description: "إدارة فرق العمل", features: ["التخصيص", "الجدولة", "المتابعة"] },

    // التقارير
    { name: "لوحة المؤشرات", category: "التقارير", color: "bg-blue-700", icon: BarChart, description: "مؤشرات الأداء الرئيسية", features: ["KPIs", "الرسوم البيانية", "التحليل"] },
    { name: "التقارير المالية", category: "التقارير", color: "bg-green-700", icon: PieChart, description: "التقارير المحاسبية", features: ["الميزانية", "الأرباح", "التدفق النقدي"] },
    { name: "تقارير المشاريع", category: "التقارير", color: "bg-purple-700", icon: FileBarChart, description: "تقارير تقدم المشاريع", features: ["التقدم", "الموارد", "التكاليف"] },
    { name: "التحليلات المتقدمة", category: "التقارير", color: "bg-indigo-700", icon: TrendingUp, description: "تحليلات ذكية للبيانات", features: ["الذكاء الاصطناعي", "التوقعات", "الاتجاهات"] },

    // الأمان
    { name: "إدارة المستخدمين", category: "الأمان", color: "bg-red-700", icon: Users, description: "إدارة حسابات المستخدمين", features: ["الحسابات", "الصلاحيات", "المراقبة"] },
    { name: "الأمان والحماية", category: "الأمان", color: "bg-gray-700", icon: Shield, description: "حماية النظام والبيانات", features: ["التشفير", "النسخ الاحتياطي", "المراقبة"] },
    { name: "سجل النشاطات", category: "الأمان", color: "bg-slate-700", icon: FileText, description: "تتبع أنشطة المستخدمين", features: ["السجلات", "التنبيهات", "التحليل"] },
    { name: "النسخ الاحتياطي", category: "الأمان", color: "bg-zinc-700", icon: Database, description: "حفظ واسترداد البيانات", features: ["النسخ التلقائي", "الاسترداد", "الجدولة"] }
  ]

  // Fix: Add the missing Clock and other icons - REMOVED, using lucide-react icons directly

  const filteredApps = allApps.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         app.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "الكل" || app.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleFavorite = (appName: string) => {
    setFavoriteApps(prev => 
      prev.includes(appName) 
        ? prev.filter(name => name !== appName)
        : [...prev, appName]
    )
  }

  const categories = [
    "التطبيقات المفضلة: وصول سريع لما تستخدمه يومياً.",
    "المشاريع والصيانة: أدوات لتتبع عملك وخدماتك.",
    "لوحات المعلومات: تقارير في الوقت الفعلي وتحليلات.",
    "البريد والتواصل: اتصال آمن وفعال مع فريقك وعملائك."
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-16 relative overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-customer via-employee to-admin rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-orange via-customer to-employee rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-admin to-orange rounded-full blur-2xl animate-pulse-slow"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              مرحباً بك في <span className="bg-gradient-to-r from-customer to-employee bg-clip-text text-transparent">Al-Azab Apps Hub</span>
            </h1>
            
            <div className="max-w-4xl mx-auto space-y-4 text-muted-foreground mb-12 animate-fade-in" style={{animationDelay: '0.2s'}}>
              {categories.map((category, index) => (
                <p key={index} className="text-lg leading-relaxed">{category}</p>
              ))}
            </div>

            {/* Enhanced Progress Indicators */}
            <div className="flex justify-center gap-4 mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
              {[
                { color: 'bg-primary', label: 'النظام الأساسي' },
                { color: 'bg-customer', label: 'العملاء' },
                { color: 'bg-employee', label: 'الموظفين' },
                { color: 'bg-admin', label: 'الإدارة' },
                { color: 'bg-orange', label: 'التطبيقات' },
                { color: 'bg-muted', label: 'المزيد قريباً' }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-4 h-4 rounded-full ${item.color} mx-auto mb-2 transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg`}></div>
                  <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Apps Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-center text-foreground mb-6">
              كل ما تحتاجه لإدارة عملك موجود هنا، <span className="text-orange">بنقرة واحدة فقط</span>
            </h2>
            
            {/* Enhanced Search and Filters */}
            <div className="max-w-4xl mx-auto mb-12 space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-muted-foreground w-6 h-6" />
                <Input 
                  placeholder="ابحث عن التطبيقات والأدوات..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-14 pr-6 py-4 text-lg rounded-2xl border-2 focus:border-primary shadow-lg transition-all duration-300 hover:shadow-xl"
                />
                {searchQuery && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setSearchQuery("")}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2"
                  >
                    ✕
                  </Button>
                )}
              </div>

              {/* Category Tabs */}
              <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
                <TabsList className="grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-9 w-full bg-white/50 backdrop-blur-sm border shadow-lg rounded-2xl p-2">
                  {appCategories.map((category) => (
                    <TabsTrigger 
                      key={category} 
                      value={category}
                      className="text-xs lg:text-sm font-medium rounded-xl transition-all duration-300 hover:bg-primary/10"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>

              {/* View Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    {filteredApps.length} تطبيق متاح
                  </span>
                  <Badge variant="secondary" className="bg-orange/10 text-orange border-orange/20">
                    {selectedCategory}
                  </Badge>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button
                    variant={viewMode === "grid" ? "customer" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="transition-all duration-300"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "customer" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="transition-all duration-300"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Enhanced Apps Grid */}
            <div className={`max-w-7xl mx-auto mb-12 ${
              viewMode === "grid" 
                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6" 
                : "space-y-4"
            }`}>
              {filteredApps.map((app, index) => {
                const IconComponent = app.icon
                const isFavorite = favoriteApps.includes(app.name)
                
                if (viewMode === "list") {
                  return (
                    <Card key={index} className="hover:shadow-xl transition-all duration-300 cursor-pointer group animate-fade-in border-l-4 border-l-transparent hover:border-l-primary" style={{animationDelay: `${index * 0.1}s`}}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-16 h-16 ${app.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{app.name}</h3>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  toggleFavorite(app.name)
                                }}
                                className="p-1 hover:bg-yellow-100"
                              >
                                <Star className={`w-4 h-4 ${isFavorite ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`} />
                              </Button>
                            </div>
                            <p className="text-muted-foreground text-sm mb-2">{app.description}</p>
                            <div className="flex flex-wrap gap-1">
                              {app.features.slice(0, 3).map((feature, fIndex) => (
                                <Badge key={fIndex} variant="outline" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <Badge className={`${app.color} text-white border-0`}>
                            {app.category}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  )
                }

                return (
                  <Card key={index} className="hover:shadow-xl transition-all duration-500 cursor-pointer group animate-fade-in hover:-translate-y-2" style={{animationDelay: `${index * 0.1}s`}}>
                    <CardContent className="p-6 text-center relative">
                      {/* Favorite Button */}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleFavorite(app.name)
                        }}
                        className="absolute top-2 right-2 p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Star className={`w-4 h-4 ${isFavorite ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`} />
                      </Button>

                      <div className={`w-16 h-16 ${app.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-2xl`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{app.name}</h3>
                      <p className="text-xs text-muted-foreground mb-3 leading-tight">{app.description}</p>
                      
                      <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        {app.features.slice(0, 2).map((feature, fIndex) => (
                          <Badge key={fIndex} variant="outline" className="text-xs block">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Enhanced Bottom Section */}
            <div className="text-center animate-fade-in bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                جميع خدماتك وأدواتك في <span className="text-orange">مكان واحد</span>
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">هل تحتاج تطبيق معين؟ أخبرنا وسنقوم بإضافته!</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button variant="orange" size="lg" className="gap-3 text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 animate-bounce-soft">
                  <ArrowRight className="w-6 h-6" />
                  طلب تطبيق جديد
                </Button>
                
                <Button variant="outline" size="lg" className="gap-3 text-lg px-8 py-4 rounded-2xl">
                  <MessageSquare className="w-6 h-6" />
                  اتصل بالدعم التقني
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground py-12 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="text-center lg:text-right">
              <div className="flex items-center gap-3 mb-4">
                <Button variant="ghost" size="sm" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10">
                  🌙 تبديل الوضع المظلم
                </Button>
                <span className="text-primary-foreground/60">|</span>
                <span className="text-sm">تم التطوير بواسطة <span className="text-orange font-semibold">Alazab.dev</span></span>
              </div>
            </div>
            
            <div className="text-center lg:text-left text-sm space-y-2 max-w-4xl">
              <p className="text-primary-foreground/90">
                <strong>شركة العزب للإنشاءات</strong> — شركة تابعة للعلامة التجارية المسجلة (د-ل-ن-ص رقم: 849203826)، تعمل باسم تجاري "عزب للتنفيذ".
              </p>
              <p className="text-primary-foreground/80 leading-relaxed">
                "أعمال الإدارة للمشاريع الصناعية والخدمية والإمدادات العامة" المكتب الرئيسي: 8/500 شارع المعادي، القاهرة 4234570، مصر | 
                البريد الإلكتروني: <span className="text-orange">info@alazab.com</span> | الهاتف: <span className="text-orange">+20 2 27047955</span> | 
                الموقع: <span className="text-orange">www.alazab.com</span>
              </p>
              <p className="text-primary-foreground/60">
                جميع الحقوق محفوظة. © 2025 www.alazab.com
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AppsHub
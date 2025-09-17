import { useState } from "react"
import { Header } from "@/components/Layout/Header"
import { Footer } from "@/components/Layout/Footer"
import { useTranslation } from 'react-i18next'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Search, ArrowRight, Star, Grid, List,
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
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(t('appsHub.categories.all'))
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [favoriteApps, setFavoriteApps] = useState<string[]>([])

  const appCategories = [
    t('appsHub.categories.all'), 
    t('appsHub.categories.projectManagement'), 
    t('appsHub.categories.accounting'), 
    t('appsHub.categories.hr'), 
    t('appsHub.categories.salesMarketing'), 
    t('appsHub.categories.warehouse'), 
    t('appsHub.categories.maintenance'), 
    t('appsHub.categories.reports'), 
    t('appsHub.categories.security')
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

  const filteredApps = allApps.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         app.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === t('appsHub.categories.all') || app.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleFavorite = (appName: string) => {
    setFavoriteApps(prev => 
      prev.includes(appName) 
        ? prev.filter(name => name !== appName)
        : [...prev, appName]
    )
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      
      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('appsHub.title')}<span className="text-orange">{t('appsHub.titleHighlight')}</span>
          </h1>
        </div>

        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder={t('appsHub.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-12 pl-4 py-3 text-base rounded-xl border bg-background shadow-sm focus:shadow-md transition-all duration-300"
            />
          </div>
        </div>

        {/* Category Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {appCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "bg-background hover:bg-muted border-border"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* View Toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setViewMode("grid")}
                className={`p-2 ${viewMode === "grid" ? "bg-muted" : ""}`}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost" 
                size="sm"
                onClick={() => setViewMode("list")}
                className={`p-2 ${viewMode === "list" ? "bg-muted" : ""}`}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
            <span className="text-sm text-muted-foreground">
              {filteredApps.length} {t('common.apps')}
            </span>
          </div>
        </div>

        {/* Apps Grid */}
        <div className={`${
          viewMode === "grid" 
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" 
            : "space-y-4"
        }`}>
          {filteredApps.map((app, index) => {
            const IconComponent = app.icon
            const isFavorite = favoriteApps.includes(app.name)
            
            if (viewMode === "list") {
              return (
                <Card key={index} className="hover:shadow-md transition-all duration-300 cursor-pointer group bg-background border border-border">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${app.color} rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-base text-foreground mb-1">{app.name}</h3>
                        <p className="text-sm text-muted-foreground">{app.description}</p>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleFavorite(app.name)
                        }}
                        className="p-2"
                      >
                        <Star className={`w-4 h-4 ${isFavorite ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            }

            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer bg-background border border-border hover:border-primary/20" 
              >
                <CardContent className="p-6 text-center relative">
                  {/* Favorite Button */}
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleFavorite(app.name)
                    }}
                    className="absolute top-3 left-3 p-1 h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Star className={`w-3 h-3 ${isFavorite ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} />
                  </Button>

                  {/* App Icon */}
                  <div className={`w-16 h-16 ${app.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-all duration-300 shadow-sm`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* App Info */}
                  <div>
                    <h3 className="font-semibold text-base text-foreground mb-2">{app.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{app.description}</p>
                    
                    {/* Launch Button */}
                    <Button size="sm" variant="outline" className="w-full text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                      {t('common.launch')}
                      <ArrowRight className="w-3 h-3 mr-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 px-6 py-3 bg-background rounded-full border shadow-sm">
            <div className="text-center">
              <div className="text-lg font-bold text-foreground">{allApps.length}</div>
              <div className="text-xs text-muted-foreground">{t('common.apps')} {t('common.available')}</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-lg font-bold text-foreground">{appCategories.length - 1}</div>
              <div className="text-xs text-muted-foreground">{t('common.category')}</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-lg font-bold text-foreground">{favoriteApps.length}</div>
              <div className="text-xs text-muted-foreground">{t('common.favorite')}</div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default AppsHub
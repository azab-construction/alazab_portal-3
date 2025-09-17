import { useState } from "react"
import { Header } from "@/components/Layout/Header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  User, Mail, Phone, MapPin, Calendar, Building, 
  Settings, Bell, Shield, Key, Edit, Save, 
  Upload, Camera, Star, Award, Activity,
  FileText, Clock, TrendingUp, Users
} from "lucide-react"
import { useNavigate } from "react-router-dom"

const Profile = () => {
  const navigate = useNavigate()
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    name: "أحمد محمد العزب",
    email: "ahmed@alazab.com",
    phone: "+20 10 1234 5678",
    position: "مهندس مشاريع أول",
    department: "قسم التنفيذ",
    joinDate: "2023-01-15",
    location: "القاهرة الجديدة، مصر",
    bio: "مهندس مشاريع متخصص في الإنشاءات المعمارية مع خبرة 8 سنوات في إدارة المشاريع الكبيرة.",
    avatar: ""
  })

  const stats = [
    { label: "المشاريع المكتملة", value: "24", icon: Award, color: "text-customer" },
    { label: "المهام النشطة", value: "8", icon: Activity, color: "text-employee" },
    { label: "ساعات العمل", value: "1,240", icon: Clock, color: "text-admin" },
    { label: "معدل الإنجاز", value: "96%", icon: TrendingUp, color: "text-orange" }
  ]

  const recentActivity = [
    { action: "اكتمل مشروع فيلا الرحاب", time: "منذ ساعتين", type: "project" },
    { action: "تم تحديث التقرير الشهري", time: "منذ يوم", type: "report" },
    { action: "اجتماع فريق المشروع", time: "منذ 3 أيام", type: "meeting" },
    { action: "مراجعة المخططات الهندسية", time: "منذ أسبوع", type: "review" }
  ]

  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically save to backend
    console.log("Profile saved:", profileData)
  }

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">الملف الشخصي</h1>
            <p className="text-muted-foreground">إدارة معلوماتك الشخصية وإعدادات الحساب</p>
          </div>
          <Button 
            variant="outline"
            onClick={() => navigate('/apps-hub')}
            className="gap-2"
          >
            <Users className="w-4 h-4" />
            العودة للتطبيقات
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <Card className="lg:col-span-1 shadow-xl">
            <CardHeader className="text-center pb-2">
              <div className="relative mx-auto mb-4">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={profileData.avatar} />
                  <AvatarFallback className="text-2xl bg-customer text-customer-foreground">
                    {profileData.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <Button 
                  variant="outline"
                  size="sm"
                  className="absolute -bottom-1 -right-1 rounded-full w-8 h-8 p-0"
                >
                  <Camera className="w-4 h-4" />
                </Button>
              </div>
              
              <CardTitle className="text-xl">{profileData.name}</CardTitle>
              <p className="text-muted-foreground">{profileData.position}</p>
              <Badge variant="outline" className="mt-2">
                {profileData.department}
              </Badge>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Quick Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{profileData.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{profileData.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{profileData.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">انضم في {new Date(profileData.joinDate).toLocaleDateString('ar-EG')}</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-3 bg-gray-50/50 rounded-xl">
                    <stat.icon className={`w-5 h-5 mx-auto mb-1 ${stat.color}`} />
                    <div className="font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="info" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="info" className="gap-2">
                  <User className="w-4 h-4" />
                  المعلومات
                </TabsTrigger>
                <TabsTrigger value="activity" className="gap-2">
                  <Activity className="w-4 h-4" />
                  النشاطات
                </TabsTrigger>
                <TabsTrigger value="security" className="gap-2">
                  <Shield className="w-4 h-4" />
                  الأمان
                </TabsTrigger>
                <TabsTrigger value="settings" className="gap-2">
                  <Settings className="w-4 h-4" />
                  الإعدادات
                </TabsTrigger>
              </TabsList>

              {/* Personal Information */}
              <TabsContent value="info">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>المعلومات الشخصية</CardTitle>
                      <p className="text-muted-foreground text-sm">إدارة بياناتك الشخصية والمهنية</p>
                    </div>
                    <Button
                      variant={isEditing ? "customer" : "outline"}
                      onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                      className="gap-2"
                    >
                      {isEditing ? (
                        <>
                          <Save className="w-4 h-4" />
                          حفظ التغييرات
                        </>
                      ) : (
                        <>
                          <Edit className="w-4 h-4" />
                          تعديل
                        </>
                      )}
                    </Button>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">الاسم الكامل</Label>
                        <Input
                          id="name"
                          value={profileData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          disabled={!isEditing}
                          className="disabled:opacity-75"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">البريد الإلكتروني</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profileData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          disabled={!isEditing}
                          className="disabled:opacity-75"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">رقم الهاتف</Label>
                        <Input
                          id="phone"
                          value={profileData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          disabled={!isEditing}
                          className="disabled:opacity-75"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="position">المنصب</Label>
                        <Input
                          id="position"
                          value={profileData.position}
                          onChange={(e) => handleInputChange('position', e.target.value)}
                          disabled={!isEditing}
                          className="disabled:opacity-75"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="department">القسم</Label>
                        <Input
                          id="department"
                          value={profileData.department}
                          onChange={(e) => handleInputChange('department', e.target.value)}
                          disabled={!isEditing}
                          className="disabled:opacity-75"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="location">الموقع</Label>
                        <Input
                          id="location"
                          value={profileData.location}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                          disabled={!isEditing}
                          className="disabled:opacity-75"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">نبذة شخصية</Label>
                      <Textarea
                        id="bio"
                        value={profileData.bio}
                        onChange={(e) => handleInputChange('bio', e.target.value)}
                        disabled={!isEditing}
                        className="disabled:opacity-75 min-h-[100px]"
                        placeholder="اكتب نبذة مختصرة عن خبرتك ومهاراتك..."
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Recent Activity */}
              <TabsContent value="activity">
                <Card>
                  <CardHeader>
                    <CardTitle>النشاطات الأخيرة</CardTitle>
                    <p className="text-muted-foreground text-sm">تتبع أنشطتك في النظام</p>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 bg-gray-50/50 rounded-xl">
                          <div className={`w-2 h-2 rounded-full mt-2 ${
                            activity.type === 'project' ? 'bg-customer' :
                            activity.type === 'report' ? 'bg-employee' :
                            activity.type === 'meeting' ? 'bg-admin' :
                            'bg-orange'
                          }`}></div>
                          <div className="flex-1">
                            <p className="text-foreground font-medium">{activity.action}</p>
                            <p className="text-muted-foreground text-sm">{activity.time}</p>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {activity.type === 'project' ? 'مشروع' :
                             activity.type === 'report' ? 'تقرير' :
                             activity.type === 'meeting' ? 'اجتماع' : 'مراجعة'}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Security Settings */}
              <TabsContent value="security">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>إعدادات الأمان</CardTitle>
                      <p className="text-muted-foreground text-sm">إدارة كلمة المرور وإعدادات الحماية</p>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <Button variant="outline" className="w-full justify-between">
                          <div className="flex items-center gap-3">
                            <Key className="w-5 h-5 text-muted-foreground" />
                            <span>تغيير كلمة المرور</span>
                          </div>
                          <span className="text-sm text-muted-foreground">آخر تغيير: منذ شهرين</span>
                        </Button>

                        <Button variant="outline" className="w-full justify-between">
                          <div className="flex items-center gap-3">
                            <Shield className="w-5 h-5 text-muted-foreground" />
                            <span>المصادقة الثنائية</span>
                          </div>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            مُفعّل
                          </Badge>
                        </Button>

                        <Button variant="outline" className="w-full justify-between">
                          <div className="flex items-center gap-3">
                            <Bell className="w-5 h-5 text-muted-foreground" />
                            <span>تنبيهات الأمان</span>
                          </div>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            مُفعّل
                          </Badge>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* General Settings */}
              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>الإعدادات العامة</CardTitle>
                    <p className="text-muted-foreground text-sm">تخصيص تجربتك في النظام</p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-50/50 rounded-xl">
                        <div>
                          <h4 className="font-medium text-foreground">اللغة</h4>
                          <p className="text-sm text-muted-foreground">اختر لغة واجهة النظام</p>
                        </div>
                        <Badge variant="outline">العربية</Badge>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-50/50 rounded-xl">
                        <div>
                          <h4 className="font-medium text-foreground">المنطقة الزمنية</h4>
                          <p className="text-sm text-muted-foreground">توقيت القاهرة (GMT+2)</p>
                        </div>
                        <Badge variant="outline">CAI</Badge>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-50/50 rounded-xl">
                        <div>
                          <h4 className="font-medium text-foreground">التنبيهات</h4>
                          <p className="text-sm text-muted-foreground">إعدادات الإشعارات</p>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          مُفعّل
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
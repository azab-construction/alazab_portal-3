import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Facebook, 
  Linkedin, 
  Instagram,
  ExternalLink
} from "lucide-react";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-muted/30 border-t border-border mt-auto">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">عز</span>
              </div>
              <div className="text-right">
                <h1 className="text-lg font-bold text-foreground">al-azab.co</h1>
                <p className="text-sm text-orange">{t('footer.companyInfo.title')}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t('footer.companyInfo.description')}
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <Button variant="ghost" size="sm" className="p-2 hover:bg-orange/10">
                <Twitter className="w-4 h-4 text-muted-foreground hover:text-orange" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-orange/10">
                <Facebook className="w-4 h-4 text-muted-foreground hover:text-orange" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-orange/10">
                <Linkedin className="w-4 h-4 text-muted-foreground hover:text-orange" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-orange/10">
                <Instagram className="w-4 h-4 text-muted-foreground hover:text-orange" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-foreground">
              {t('footer.quickLinks.title')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-orange">
                  {t('footer.quickLinks.dashboard')}
                  <ExternalLink className="w-3 h-3 mr-1" />
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-orange">
                  {t('footer.quickLinks.projects')}
                  <ExternalLink className="w-3 h-3 mr-1" />
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-orange">
                  {t('footer.quickLinks.reports')}
                  <ExternalLink className="w-3 h-3 mr-1" />
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-orange">
                  {t('footer.quickLinks.settings')}
                  <ExternalLink className="w-3 h-3 mr-1" />
                </Button>
              </li>
            </ul>
          </div>

          {/* Support & Help */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-foreground">
              {t('footer.support.title')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-orange">
                  {t('footer.support.help')}
                  <ExternalLink className="w-3 h-3 mr-1" />
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-orange">
                  {t('footer.support.documentation')}
                  <ExternalLink className="w-3 h-3 mr-1" />
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-orange">
                  {t('footer.support.contact')}
                  <ExternalLink className="w-3 h-3 mr-1" />
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-sm text-muted-foreground hover:text-orange">
                  {t('footer.support.training')}
                  <ExternalLink className="w-3 h-3 mr-1" />
                </Button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-foreground">
              {t('footer.contact.title')}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-orange" />
                <span>{t('footer.contact.phone')}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-orange" />
                <span>{t('footer.contact.email')}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-orange" />
                <span>{t('footer.contact.address')}</span>
              </div>
            </div>

            {/* Support Badge */}
            <div className="bg-background rounded-lg p-3 border">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-foreground font-medium">{t('common.support')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              {t('footer.rights')}
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{t('footer.poweredBy')}</span>
              <Button variant="link" className="p-0 h-auto text-sm text-orange hover:text-orange/80">
                Lovable AI Platform
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
 
export default async function HomePage() {
  const t = await getTranslations('HomePage');
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
    </div>
  );
}
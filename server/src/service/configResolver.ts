type SiteConfig = {
  adCount: number;
  parent: string;
}

export class ConfigResolverService {
  resolveConfig(sitename: string): SiteConfig | undefined {
    if (sitename === 'ducks.com') {
      return {
        adCount: 10,
        parent: '.duck[attr="quack"]',
      };
    }
    if (sitename === 'cats.com') {
      return {
        adCount: 10,
        parent: '#meow',
      };
    }
    if (sitename === 'dogs.io') {
      return {
        adCount: 1,
        parent: '.friend',
      };
    }
  }
}
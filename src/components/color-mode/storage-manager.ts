import {
  cookieStorageManager as BaseCookieStorageManager,
  localStorageManager as BaseLocalStorageManager,
  StorageManager as BaseStorageManager,
  storageKey as BaseStorageKey,
} from '@chakra-ui/react';

/**
 * Simple object to handle read-write to cookies
 */
export { BaseCookieStorageManager as cookieStorageManager };

/**
 * Simple object to handle read-write to localStorage
 */
export { BaseLocalStorageManager as localStorageManager };

export { BaseStorageManager as StorageManager };
export { BaseStorageKey as storageKey };

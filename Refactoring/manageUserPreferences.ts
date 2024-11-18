// before
function manageUserPreferences(userId: string, preferences: { theme: string, notifications: boolean }, action: 'save' | 'load' | 'delete'): any {
    const storageKey = `user_${userId}_preferences`;

    if (action === 'save') {
        const data = JSON.stringify(preferences);
        localStorage.setItem(storageKey, data);
        console.log(`Preferences saved for user ${userId}`);
    } else if (action === 'load') {
        const data = localStorage.getItem(storageKey);
        if (data) {
            const parsedData = JSON.parse(data);
            console.log(`Preferences loaded for user ${userId}`);
            return parsedData;
        } else {
            console.error(`No preferences found for user ${userId}`);
            return null;
        }
    } else if (action === 'delete') {
        localStorage.removeItem(storageKey);
        console.log(`Preferences deleted for user ${userId}`);
    } else {
        console.error('Invalid action');
    }
}


// after

interface UserPreferences { theme: string, notifications: boolean }

function userPreferencesHandler(userId: string, preferences: UserPreferences, action: 'save' | 'load' | 'delete'):  UserPreferences | null {
    const saveUser = (userKey: string ,preferences: UserPreferences) => {
        const dataString = JSON.stringify(preferences);
        localStorage.setItem(storageKey, dataString);
        console.log(`Preferences saved for user ${userId}`);
    }

    const loadUser = (userKey: string): UserPreferences | null => {
        const data = localStorage.getItem(userKey);
        if (data) {
            const parsedData = JSON.parse(data);
            console.log(`Preferences loaded for user ${userId}`);
            return parsedData;
        } else {
            console.error(`No preferences found for user ${userId}`);
            return null;
        }

    }

    const deleteUser = (userKey: string) => {
        localStorage.removeItem(userKey);
        console.log(`Preferences deleted for user ${userId}`);
    }

    const storageKey = `user_${userId}_preferences`;

    if (action === 'save') {
        saveUser(storageKey, preferences)
        return preferences
    }

    if (action === 'load') {
        return loadUser(storageKey)
    }

    if (action === 'delete') {
        deleteUser(storageKey)
        return null
    }
}

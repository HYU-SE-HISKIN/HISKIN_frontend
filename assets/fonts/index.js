import * as Font from "expo-font";

export const fetchFonts = async () =>
  await Font.loadAsync({
    'LG Smart Bold Italic': require('../fonts/LG Smart Bold Italic.ttf'),
    'LG Smart Bold': require('../fonts/LG Smart Bold.ttf'),
    'LG Smart Light': require('../fonts/LG Smart Light.ttf'),
    'LG Smart Regular Italic': require('../fonts/LG Smart Regular Italic.ttf'),
    'LG Smart Regular': require('../fonts/LG Smart Regular.ttf'),
    'LG Smart SemiBold': require('../fonts/LG Smart SemiBold.ttf'),

    'LG EI Headline - Bold': require('../fonts/LGEIHeadlineTTF-Bold.ttf'),
    'LG EI Headline - Light': require('../fonts/LGEIHeadlineTTF-Light.ttf'),
    'LG EI Headline - Regular': require('../fonts/LGEIHeadlineTTF-Regular.ttf'),
    'LG EI Headline - Semibold': require('../fonts/LGEIHeadlineTTF-Semibold.ttf'),
    'LG EI Headline - Thin': require('../fonts/LGEIHeadlineTTF-Thin.ttf'),
    'LG EI Headline - VF': require('../fonts/LGEIHeadlineVF.ttf'),

    'LG EI Text - Bold': require('../fonts/LGEITextTTF-Bold.ttf'),
    'LG EI Text - Light': require('../fonts/LGEITextTTF-Light.ttf'),
    'LG EI Text - Regular': require('../fonts/LGEITextTTF-Regular.ttf'),
    'LG EI Text - SemiBold': require('../fonts/LGEITextTTF-SemiBold.ttf'),
  });
import React, { FunctionComponent } from 'react';
import { Avatar } from '@fluentui-react-native/avatar';
import { View } from 'react-native';
import { steveBallmerPhotoUrl } from './../PersonaCoin/styles';
import { mobileStyles } from '../Common/styles';

export const StandardUsage: FunctionComponent = () => {
  return (
    <View style={{ paddingBottom: 40 }}>

      <View style={mobileStyles.testVariants}>

        {/* // 2 rings  ( active state) variation */}
        {/* <Avatar ringBackgroundColor={'yellow'} active="active" name="* Test Madhav *" activeAppearance="ring" size={72} /> */}

        <Avatar active="active" name="* Keshav Madhav *" activeAppearance="ring" size={16} />
        <Avatar active="active" name="* Keshav Madhav *" activeAppearance="ring" size={20} />
        <Avatar active="active" name="* Keshav Madhav *" activeAppearance="ring" size={24} />
        <Avatar active="active" name="* Keshav Madhav *" activeAppearance="ring" size={32} />

        <Avatar active="active" name="* Keshav Madhav *" activeAppearance="ring" size={40} />
        <Avatar active="active" name="* Keshav Madhav *" activeAppearance="ring" size={56} />
        <Avatar active="active" name="* Keshav Madhav *" activeAppearance="ring" size={72} />

      </View>


      <View style={mobileStyles.testVariants}>


        <Avatar activeAppearance="ring" active="active" avatarColor={'brand'} size={72} />

        <Avatar
          ringBackgroundColor={'yellow'}
          active="active"
          name="* Keshav Madhav *" activeAppearance="ring" size={72} />

        <Avatar active="active" activeAppearance="ring" size={72} name="* Richard Faynman *" imageUrl={steveBallmerPhotoUrl} />


        {/* // rest of sizes below wiht presence active */}
      </View>
      <View style={mobileStyles.testVariants}>

        {/* Variation - Standard */}

        {/* // ankraj - style each of these and Out of office variants of this. Mix this with size ramp. */}
        {/* none available presence */}
        <Avatar badge={{ status: 'available' }} avatarColor={'brand'} size={16} />

        {/* small available presence */}
        <Avatar badge={{ status: 'available' }} avatarColor={'brand'} size={20} />

        {/* small available presence */}
        <Avatar badge={{ status: 'available' }} avatarColor={'brand'} size={24} />

        {/* small available presence */}
        <Avatar badge={{ status: 'available' }} avatarColor={'brand'} size={32} />

        {/* Medium available presence */}
        <Avatar badge={{ status: 'available' }} avatarColor={'brand'} size={40} />

        {/* medium available presence */}
        <Avatar badge={{ status: 'available' }} avatarColor={'brand'} size={56} />

        <Avatar badge={{ status: 'available' }} avatarColor={'brand'} size={72} />

        {/* large available presence - out of office */}
        <Avatar badge={{ status: 'available', outOfOffice: true }} avatarColor={'brand'} size={72} />
      </View>

      <View style={mobileStyles.testVariants}>
        {/* With badge. */}
        <Avatar badge={{ status: 'doNotDisturb' }} avatarColor={'brand'} size={40} />

        <Avatar badge={{ status: 'doNotDisturb' }} avatarColor={'brand'} size={40} />

        {/* With badge. */}
        <Avatar badge={{ status: 'busy' }} avatarColor={'brand'} size={40} />
        {/* With badge. */}
        <Avatar badge={{ status: 'unknown' }} avatarColor={'brand'} size={40} />


      </View>

      <View style={mobileStyles.testVariants}>

        {/* With badge. */}
        <Avatar badge={{ status: 'blocked' }} avatarColor={'brand'} size={40} />
        {/* With badge. */}
        <Avatar badge={{ status: 'away' }} avatarColor={'brand'} size={40} />
        {/* With badge. */}
        <Avatar badge={{ status: 'offline' }} avatarColor={'brand'} size={40} />

        <Avatar badge={{ status: 'outOfOffice' }} avatarColor={'brand'} size={40} />




      </View>


      <View style={mobileStyles.testVariants}>
        {/* Variation - Standard */}

        {/* With badge. */}
        <Avatar badge={{ status: 'available' }} avatarColor={'brand'} size={40} />

        {/* Variation - No Ring and badge. */}
        <Avatar size={56} avatarColor={'brand'} />

        {/* Variation - With Ring.*/}
        {/* Variation - With Ring as well as badge?.*/}
        <Avatar active="active" badge={{ status: 'available' }} activeAppearance="ring" size={56} avatarColor={'brand'} />
      </View>

      <View style={mobileStyles.testVariants}>
        {/* Variation - Standard Inverted */}

        {/* With badge only.*/}
        <Avatar size={56} badge={{ status: 'available' }} avatarColor={'brandInverted'} />

        {/* No ring and badge.*/}
        <Avatar size={56} avatarColor={'brandInverted'} />

        {/* With ring.*/}
        <Avatar active="active" activeAppearance="ring" size={56} avatarColor={'brandInverted'} />
      </View>

      <View style={mobileStyles.testVariants}>
        {/*Variation - Anonymous*/}

        {/* With Badge.*/}
        <Avatar size={56}
          badge={{ status: 'away', outOfOffice: true }}
        />

        {/* No ring and badge.*/}
        <Avatar accessibilityLabel="Fall-back Icon" accessibilityHint="A picture representing a user" size={56} />

        {/* With ring. */}
        <Avatar
          accessibilityLabel="Fall-back Icon"
          accessibilityHint="A picture representing a user"
          size={56}
          activeAppearance="ring"
          active="active"
        />
      </View>

      <View style={mobileStyles.testVariants}>
        {/* Variation - Anonymous accent.*/}

        {/* With badge.*/}
        <Avatar size={56} badge={{ status: 'available', outOfOffice: true }} avatarColor={'accent'} />

        {/* No ring and badge.*/}
        <Avatar accessibilityLabel="Fall-back Icon" accessibilityHint="A picture representing a user" size={56} avatarColor={'accent'} />

        {/* With ring. */}
        <Avatar
          accessibilityLabel="Fall-back Icon"
          accessibilityHint="A picture representing a user"
          size={56}
          activeAppearance="ring"
          active="active"
          avatarColor={'accent'}
        />
      </View>

      <View style={mobileStyles.testVariants}>
        {/* Variation - Initials.*/}

        {/* With badge.*/}
        <Avatar size={56} badge={{ status: 'outOfOffice' }} name="* Richard Faynman *" />

        {/* No ring and badge.*/}
        <Avatar size={56} name="* Annie Markus *" avatarColor={'colorful'} />

        {/* With ring. */}
        <Avatar active="active" activeAppearance="ring" size={56} name="* Keshav Madhav *" avatarColor={'colorful'} />
      </View>

      <View style={mobileStyles.testVariants}>
        {/* Variation - Image. */}

        {/* With badge.*/}
        <Avatar size={56} badge={{ status: 'outOfOffice' }} name="* Richard Faynman *" imageUrl={steveBallmerPhotoUrl} />

        {/* No ring and badge.*/}
        <Avatar size={56} imageUrl={steveBallmerPhotoUrl} avatarColor={'colorful'} />

        {/* With ring.*/}
        <Avatar active="active" activeAppearance="ring" size={56} name="* Richard Faynman *" imageUrl={steveBallmerPhotoUrl} />
      </View>

      <View style={mobileStyles.testVariants}>
        {/* Variation - Overflow .*/}

        <Avatar size={56} initials="20" avatarColor={'colorful'} />

        {/* Variation - Group avatar*/}

        <Avatar size={56} shape={'square'} avatarColor={'colorful'} name="*Annie Martha*" />
      </View>
    </View>
  );
};

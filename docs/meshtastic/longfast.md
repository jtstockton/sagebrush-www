# LongFast Configuration

## Overview

LongFast is a Meshtastic channel preset optimized for maximum range while maintaining reasonable message delivery speed. This configuration is ideal for rural areas, outdoor adventures, and scenarios where devices are spread across large distances.

## Key Characteristics

- **Range**: Maximum (up to several miles/kilometers depending on terrain and antenna)
- **Speed**: Moderate data rate
- **Power Consumption**: Higher due to longer transmission times
- **Best For**: Rural deployments, hiking, remote monitoring

## Configuration Details

### Channel Settings

- **Bandwidth**: 250 kHz
- **Spread Factor**: 11
- **Coding Rate**: 4/8

### Typical Performance

- **Range**: 5-10+ miles (8-16+ km) in ideal conditions
- **Message Time**: ~2-4 seconds per transmission
- **Airtime**: Higher (consider duty cycle regulations)

## When to Use LongFast

Choose LongFast when:

- Devices are separated by long distances
- Line-of-sight communication paths are available
- Power consumption is not a critical concern
- You need reliable long-range messaging

## Best Practices

1. **Antenna Selection**: Use quality antennas properly installed for best range
2. **Power Management**: Monitor battery life as transmissions consume more power
3. **Duty Cycle**: Be aware of regional regulations limiting airtime
4. **Network Density**: Works best with moderate node density to avoid congestion

## See Also

- [MediumFast Configuration](mediumfast.md)
- [Meshtastic Quick Start](mt_quickstart.md)
- [Meshtastic Overview](index.md)

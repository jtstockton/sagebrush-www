# MediumFast Configuration

## Overview

MediumFast is a balanced Meshtastic channel preset that provides a good compromise between range and data rate. This is often considered the default configuration for most mesh networks, offering reliable performance across various deployment scenarios.

## Key Characteristics

- **Range**: Good (moderate distances)
- **Speed**: Fast data rate
- **Power Consumption**: Moderate
- **Best For**: General purpose deployments, urban/suburban areas, balanced performance

## Configuration Details

### Channel Settings

- **Bandwidth**: 250 kHz
- **Spread Factor**: 7
- **Coding Rate**: 4/5

### Typical Performance

- **Range**: 1-3 miles (1.6-5 km) in typical conditions
- **Message Time**: ~200-500ms per transmission
- **Airtime**: Lower than LongFast, better for dense networks

## When to Use MediumFast

Choose MediumFast when:

- You need balanced range and speed
- Deploying in urban or suburban environments
- Building a community mesh network
- Power efficiency is important but not critical
- Network has moderate to high node density

## Best Practices

1. **Default Choice**: Start with MediumFast for most deployments
2. **Network Density**: Handles higher node density better than LongFast
3. **Power Efficiency**: Better battery life than LongFast due to shorter transmissions
4. **Adaptability**: Good starting point before optimizing for specific needs

## Comparison with Other Presets

| Feature | LongFast | MediumFast |
|---------|----------|------------|
| Range | Maximum | Good |
| Speed | Moderate | Fast |
| Power Use | High | Moderate |
| Best For | Rural/Long Distance | General Purpose |

## See Also

- [LongFast Configuration](longfast.md)
- [Meshtastic Quick Start](mt_quickstart.md)
- [Meshtastic Overview](index.md)

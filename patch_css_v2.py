file_path = 'src/index.css'

with open(file_path, 'r') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    # Skip the definition line
    if '--color-navy:' in line:
        new_lines.append(line)
        continue

    # We already replaced selectors in the previous run.
    # Now we target the values which might be lowercase.
    
    # Replace #0d223f with var(--color-navy)
    line = line.replace('#0d223f', 'var(--color-navy)')
    
    # Also capitalize replacement if needed (just in case there are mixed cases left)
    line = line.replace('#0D223F', 'var(--color-navy)')

    new_lines.append(line)

with open(file_path, 'w') as f:
    f.writelines(new_lines)

print("Successfully patched src/index.css v2")

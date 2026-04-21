import re

file_path = 'src/index.css'

with open(file_path, 'r') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    # Skip the definition line
    if '--color-navy:' in line:
        new_lines.append(line)
        continue

    # Replace selectors: escape parenthesis in selector
    # We look for [\#0D223F] and replace with [var\(--color-navy\)]
    # Note: The backslash in the file is literal.
    # In python string, we need to handle escaping.
    
    # Replace the selector part
    line = line.replace('\[\#0D223F\]', '\[var\(--color-navy\)\]')
    
    # Replace the value part (colors)
    # Be careful not to replace if it's already replaced (unlikely given order)
    line = line.replace('#0D223F', 'var(--color-navy)')
    
    new_lines.append(line)

with open(file_path, 'w') as f:
    f.writelines(new_lines)

print("Successfully patched src/index.css")

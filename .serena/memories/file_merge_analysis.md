# File Merge Analysis - Repository vs Protected Files

## Overview
The project contains dual file versions:
- **Repository files** (no suffix): Current GitHub repository state, configured for .org domain
- **Protected files** ("1" suffix): User-created versions, configured for .com domain

## File-by-File Merge Analysis

### 1. CNAME Configuration
- **CNAME** (repository): `pantheonladderworks.org`
- **CNAME1** (protected): `pantheonladderworks.com`
- **Merge Strategy**: Keep both - use CNAME for .org application, CNAME1 for future .com deployment

### 2. Jekyll Configuration
- **_config.yml** (repository): Standard Jekyll config for .org
- **_config1.yml** (protected): Identical content
- **Merge Strategy**: No changes needed - configurations are identical

### 3. Git Ignore
- **.gitignore** (repository): Standard ignores for Jekyll, Node, IDE files
- **.gitignore1** (protected): Unknown content - needs examination
- **Merge Strategy**: Compare and merge any additional exclusions from protected version

### 4. Main Website
- **index.html** (repository): Main landing page with SERAPHINA references
- **index1.html** (protected): Potentially cleaned version for Google application
- **Merge Strategy**: CRITICAL - Need to examine differences for proprietary language cleanup

### 5. Package Configuration  
- **package.json** (repository): npm config with consciousness/SERAPHINA keywords
- **package1.json** (protected): Potentially cleaned version
- **Merge Strategy**: Use cleaned version for Google application, preserve original for internal use

### 6. Documentation
- **README.md** (repository): Full description with consciousness/SERAPHINA branding
- **README1.md** (protected): Potentially cleaned version
- **Merge Strategy**: Create professional version removing proprietary language

### 7. UX Documentation
- **UX_DESIGN_PLAYBOOK.md** (repository): Empty file
- **UX_DESIGN_PLAYBOOK1.md** (protected): Empty file  
- **Merge Strategy**: No action needed - both empty

### 8. Assets Directory
- **assets/** (repository): Contains site.css
- **assets1/** (protected): Contains site.css
- **Merge Strategy**: Compare CSS files for any styling differences

### 9. Claude Configuration
- **.claude/** (repository): Unknown content
- **.claude1/** (protected): Settings for project management
- **Merge Strategy**: Preserve both, examine for conflicts

## Priority Actions Needed

### High Priority (Google Application Critical)
1. **Compare index.html vs index1.html** - Look for SERAPHINA → Cypher Framework changes
2. **Compare package.json files** - Check for cleaned keywords
3. **Examine README files** - Verify proprietary language removal
4. **Validate CNAME strategy** - Ensure .org positioning is correct

### Medium Priority  
1. **Assets comparison** - Check for CSS styling differences
2. **Git ignore merge** - Ensure proper file exclusions
3. **Claude config analysis** - Understand configuration differences

### Low Priority
1. **UX documentation** - Both files empty, no immediate action
2. **Config files** - Already confirmed identical

## Merge Execution Strategy
1. **Backup current state** before any merges
2. **Examine protected files** for Google-appropriate language
3. **Selectively merge** clean content into repository files
4. **Test locally** before pushing to live site
5. **Validate** .org positioning for Google application requirements

## Risk Assessment
- **High Risk**: Accidentally deploying proprietary language to Google reviewers
- **Medium Risk**: Breaking existing functionality during merge
- **Low Risk**: CSS/styling inconsistencies

## Success Criteria
- Clean .org site with zero proprietary language
- Preserved .com functionality for future commercial deployment
- All interactive features working
- Professional presentation suitable for $200k-$350k Google application
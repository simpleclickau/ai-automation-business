# Instructions for New Manus Task: Website Repository Setup

**Objective:** Migrate the Articulate AI website to a new GitHub repository in the simpleclickau organization

---

## 📋 Prerequisites

Before starting the new task, ensure you have:

1. ✅ Access to this handoff documentation
2. ✅ Manus checkpoint reference: `manus-webdev://fddcd8fd`
3. ✅ Website backup archive: `/home/ubuntu/articulate-ai-website-backup.tar.gz` (92MB)
4. ✅ GitHub access to simpleclickau organization

---

## 🎯 Task Objective

Create a new repository `simpleclickau/articulate-ai-website` and migrate the complete Articulate AI marketing website with all files, documentation, and git history.

---

## 📝 Prompt for New Manus Task

Copy and paste this prompt to start the new task:

```
I need to migrate the Articulate AI website to a new GitHub repository.

**Context:**
- Current website is in Manus project: articulate-ai-website
- Manus checkpoint: manus-webdev://fddcd8fd
- Backup archive: /home/ubuntu/articulate-ai-website-backup.tar.gz
- Handoff documentation: /home/ubuntu/ai-automation-business/website/WEBSITE_HANDOFF.md

**Requirements:**
1. Create new repository: simpleclickau/articulate-ai-website (private)
2. Extract website files from backup or use Manus checkpoint
3. Initialize git repository with proper .gitignore
4. Create comprehensive README.md with:
   - Project overview and purpose
   - Setup instructions (pnpm install, pnpm dev)
   - Development workflow
   - Brand guidelines (colors, fonts, design system)
   - Deployment instructions
   - Contributing guidelines
5. Add CONTRIBUTING.md with development guidelines
6. Add CHANGELOG.md for version tracking
7. Commit all files with descriptive commit message
8. Push to GitHub repository
9. Verify repository structure and documentation

**Brand Identity:**
- Colors: Purple (#7C3AED), Amber (#F59E0B), Navy (#1A1A2E)
- Fonts: Montserrat (headings), Inter (body)
- Style: Clean, modern, professional with geometric gradients

**Tech Stack:**
- React 19 + Tailwind 4
- Wouter (routing)
- shadcn/ui components
- React Hook Form + Zod validation

**Pages:**
- Home, Features, About, Investors, Contact

Please read the handoff documentation first, then proceed with creating the repository and migrating all files.
```

---

## 🔧 Step-by-Step Instructions

### Step 1: Read Handoff Documentation

```bash
# In new Manus task, read the handoff document
cat /home/ubuntu/ai-automation-business/website/WEBSITE_HANDOFF.md
```

### Step 2: Extract Website Files

**Option A: Use Manus Checkpoint (Recommended)**
```bash
# Reference the checkpoint in Manus
# Checkpoint: manus-webdev://fddcd8fd
```

**Option B: Use Backup Archive**
```bash
# Extract backup archive
cd /home/ubuntu
tar -xzf articulate-ai-website-backup.tar.gz
cd articulate-ai-website
```

### Step 3: Create New Repository

```bash
# Create repository in simpleclickau organization
gh repo create simpleclickau/articulate-ai-website \
  --private \
  --description="Articulate AI marketing website - Voice Intelligence Platform" \
  --source=. \
  --remote=origin
```

### Step 4: Prepare Repository

```bash
# Ensure .gitignore exists
# Ensure README.md is comprehensive
# Add CONTRIBUTING.md
# Add CHANGELOG.md
# Add LICENSE (if needed)
```

### Step 5: Initial Commit

```bash
git add .
git commit -m "Initial commit: Articulate AI marketing website

- Complete 5-page marketing website (Home, Features, About, Investors, Contact)
- Responsive design with mobile navigation
- Contact and demo request forms with validation
- Brand identity: Purple (#7C3AED) + Amber (#F59E0B)
- Built with React 19 + Tailwind 4 + shadcn/ui
- Includes comprehensive documentation and setup instructions"

git push -u origin master
```

### Step 6: Verify Repository

```bash
# Check repository structure
tree -L 2 -a

# Verify files are committed
git log --oneline

# Check remote
git remote -v
```

---

## 📚 Files to Include

### Essential Files

- [ ] All files from `/home/ubuntu/articulate-ai-website/`
- [ ] Comprehensive README.md
- [ ] CONTRIBUTING.md
- [ ] CHANGELOG.md
- [ ] .gitignore (Node.js, Manus specific)
- [ ] package.json and pnpm-lock.yaml
- [ ] All source code (client/src/)
- [ ] Configuration files (tailwind.config.ts, tsconfig.json, vite.config.ts)

### Documentation to Include

- [ ] Brand guidelines in README
- [ ] Setup instructions
- [ ] Development workflow
- [ ] Deployment guide
- [ ] Contributing guidelines
- [ ] Code of conduct (optional)

---

## ✅ Verification Checklist

After completing the migration, verify:

- [ ] Repository created in simpleclickau organization
- [ ] All website files committed
- [ ] README.md is comprehensive and clear
- [ ] CONTRIBUTING.md exists with guidelines
- [ ] .gitignore properly configured
- [ ] package.json has correct scripts
- [ ] Git history is clean and descriptive
- [ ] Repository is private
- [ ] All documentation is accurate
- [ ] Links to other repos are correct

---

## 🎨 README Template

Use this structure for the new README.md:

```markdown
# Articulate AI Website

**Voice Intelligence, Perfectly Articulated**

Marketing website for Articulate AI - Enterprise-grade AI voice agent platform for Australian businesses.

---

## 🎯 Overview

[Brief description of the website and its purpose]

## 🚀 Quick Start

[Setup instructions]

## 🎨 Brand Guidelines

[Colors, fonts, design system]

## 🛠️ Tech Stack

[Technologies used]

## 📁 Project Structure

[Directory structure]

## 🔧 Development

[Development workflow]

## 🚢 Deployment

[Deployment instructions]

## 🤝 Contributing

[Link to CONTRIBUTING.md]

## 📝 License

[License information]
```

---

## 🔗 Important References

### From Current Task

- **Handoff Doc:** `/home/ubuntu/ai-automation-business/website/WEBSITE_HANDOFF.md`
- **Backup Archive:** `/home/ubuntu/articulate-ai-website-backup.tar.gz`
- **Manus Checkpoint:** `manus-webdev://fddcd8fd`
- **Live Preview:** https://3000-iccrb096a5xfglghvu65s-1dfe0ade.manus-asia.computer

### Related Repositories

- **Business Research:** https://github.com/simpleclickau/ai-automation-business
- **Main Development:** https://github.com/simpleclickau/articulate-ai
- **Investor Deck:** manus-slides://PUvnk6Kt9o1cHSzHuhRB1Q

---

## 💡 Tips for Success

1. **Read the handoff doc first** - Contains all context and decisions
2. **Use the Manus checkpoint** - Easiest way to access the website
3. **Keep git history clean** - Use descriptive commit messages
4. **Document everything** - Future developers will thank you
5. **Test after migration** - Ensure everything works (pnpm install, pnpm dev)
6. **Verify links** - Check all links to other repos and resources

---

## ❓ Common Questions

**Q: Should I use the Manus checkpoint or backup archive?**  
A: Use the Manus checkpoint (`manus-webdev://fddcd8fd`) - it's the most recent and reliable source.

**Q: What if files are missing?**  
A: Check the handoff documentation for the complete file list and structure.

**Q: Should I include node_modules?**  
A: No, node_modules should be in .gitignore. Users will run `pnpm install`.

**Q: What about environment variables?**  
A: Document required env vars in README, but don't commit actual .env files.

**Q: Should I create a new Manus project?**  
A: No, this is just migrating to a GitHub repository. Manus project can be archived.

---

## 🎯 Success Criteria

The task is complete when:

- ✅ Repository exists at https://github.com/simpleclickau/articulate-ai-website
- ✅ All website files are committed
- ✅ README.md is comprehensive and helpful
- ✅ Documentation is complete and accurate
- ✅ Repository is properly configured (private, correct description)
- ✅ Git history is clean and descriptive
- ✅ Website can be run locally with `pnpm install && pnpm dev`

---

**Good luck with the migration! This should be a straightforward task with all the documentation provided.**


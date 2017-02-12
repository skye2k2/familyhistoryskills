# Family History Skills

Heroku application to improve and track genealogy/family history skills: [familyhistoryskills.herokuapp.com](familyhistoryskills.herokuapp.com "Family History Skills Appplication")

___

_WORK-IN-PROGRESS: Not yet ready for public consumption. See checklist below_

___

There are countless blogs providing countless checklists for developing your family history and genealogy skills, but each has a different emphasis, and most had the drawback of being extremely simple checklists, without advanced information, integrated how-to's, learning aids, or any sort of permanance.

The primary emphasis of this application is to allow newly-minted LDS family history consultants to gauge core skills required to function well in the [FamilySearch](https://familysearch.org "FamilySearch products") and associated [partner](https://familysearch.org/partneraccess "FamilySearch partner information") products, but can be used by anyone wanting to establish a solid foundation for family history research.

## To-Do:

- [x] Heroku app
- [x] README + TODO
- [x] Utilize CDN for static assets
- [x] Localized (key off of browser/FS lang locale, fall back to "en")
- [x] Publicly visible--login only for convenience
- [x] Add loading spinner while fetching data
- [x] Total percentage score as aggregate of all weighted subsections, updated on change
- [x] Auto checking/unchecking
- [x] Auto-save on each change
- [ ] Add local storage for database fallback & non-logged-in experience
- [x] Add lightweight database (Firebase) to store default skill set, translations, and eventually user progress

  - [ ] Limit access to specific database entries, based on user ID (potentially split into separate databases)

- [ ] Add FamilySearch Oauth for long-term, portable storing of progress

  - [ ] Register redirect URI
  - [ ] Obtain devkey
  - [ ] Integrate OAuth flow
  - [ ] Vanity URL

- [x] Enumerate competencies and relative weights (just use points and convert to percentage in calculation to avoid re-working values after every change)
  - [x] Computer skills: ~10%
  - [x] Core Competencies/Essential Skills: ~80%
  - [x] Advanced Skills: ~10%

- [ ] Member-related knowledge gated by member status
- [ ] FH Coordinator status page for a set of users
- [ ] Dowload/print empty/current checklist
- [ ] Mobile-friendly
- [ ] Certification wizard?
- [ ] Pure offline experience?

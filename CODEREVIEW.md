# Code Review Checklist

### Creating a new Branch
- Branch should be created from "main",
  - incase of feature, name should contain prefix as "feature" along with feature name or Jira ID Eg. feature-back-handling, feature-dx1723
  - incase of bugfix, name should contain prefix as "fix" along with its module name or Jira ID Eg. fix-back-handling, fix-dx1234
- Always create a PR after rebasing to current version of the branch from which the feature branch was created to avoid merge conflicts Eg. "feature-dx1234" was cut from "main" than before raising a PR rebase your branch to "main"
- Every PR should have atleast 2 reviewers approving it, and the merge should only be happen after resolving all the comments raised by the reviewers.
- To confirm if the module created is fulfilling the requirment and all the usecases are considered Eg. Responsiveness, Form submission
- Creating a Page/Component must be in this format
```
const PageName/ComponentName = () => {}
export default PageName/ComponentName
```

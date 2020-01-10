# Login Screens

```react
#frame: true
plain: true
responsive: [small, large]
---
const exampleProps = {
  navbar: sharedNavbarProps,
  authFlow: {
    user: null,
    title: 'Anmelden mit Passwort',
    form: {
      method: 'POST',
      action: '/sign-in'
    }
  },
  authSystems: [
    {
      id: 'password',
      type: 'password',
      name: 'leihs password',
      description: null,
      external_url: null
    },
    {
      id: 'password',
      type: 'password',
      name: 'leihs password',
      description: null,
      external_url: null
    }
  ]
};

<SignInPage {...exampleProps} />
```

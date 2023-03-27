import React, { Component } from 'react';
import { IonHeader,  IonBackButton,
    IonButtons, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';
import './Home.css';

type State = {
  username: string | null,
  password: string | null
}

export default class Login extends Component<{},State> {
  signupFormRef: React.Ref<HTMLFormElement>

  constructor(props: {}) {
    super(props);
    this.state = {
      username: null,
      password: null
    }
    this.signupFormRef = React.createRef();
  }

  onLignup() {}
  render() {
    return (
      <>
        <IonHeader>
          <IonToolbar>
          <IonButtons slot="start">
          <IonBackButton defaultHref="/home" />
          </IonButtons>
            <IonTitle>Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
    
        </IonContent>
      </>
    );
  }
}
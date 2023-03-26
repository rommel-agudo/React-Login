import React, { Component } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';
import './Home.css';
type State = {
  username: string | null,
  password: string | null
}

export default class Home extends Component<{},State> {
  signupFormRef: React.Ref<HTMLFormElement>

  constructor(props: {}) {
    super(props);
    this.state = {
      username: null,
      password: null
    }
    this.signupFormRef = React.createRef();
  }

  onSignup() {}
  render() {
    return (
      <>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Signup</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <form ref={this.signupFormRef}>
            <IonList no-lines>
              <IonItem>
                <IonLabel color="primary">Username</IonLabel>
                <IonInput value={this.state.username} name="username" type="text" required>
                </IonInput>
              </IonItem>
              <IonItem>
                <IonLabel color="primary">Password</IonLabel>
                <IonInput value={this.state.password} name="password" type="password" required>
                </IonInput>
              </IonItem>
            </IonList>
            <div className="button-wrapper">
              <IonButton onClick={() => this.onSignup()} type="submit">Create</IonButton>
            </div>
          </form>
        </IonContent>
      </>
    );
  }
}
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserI, acompI, autoI } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { firestore } from 'firebase';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { storage } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFirestore, private camera: Camera) {
  }
  private userCollection: AngularFirestoreCollection<UserI>;
  private users: Observable<UserI[]>;
  private userDoc: AngularFirestoreDocument<UserI>;
  private user: Observable<UserI>;

  public selectedUser: UserI = {};
  public selectedAcomp: acompI = {};

  // getAllUsers() {
  //   return this.users = this.userCollection.snapshotChanges().pipe(map(changes => {
  //     return changes.map(action => {
  //       const data = action.payload.doc.data() as UserI;
  //       data.uid = action.payload.doc.id;
  //       return data;
  //     });
  //   }));
  // }

  getOneUser(idUser: string) {
    this.userDoc = this.db.doc<UserI>(`user/${idUser}`);
    return this.user = this.userDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        this.db.collection('user').doc(idUser).set({
          uid: idUser
        })
        return null;
      } else {
        const data = action.payload.data() as UserI;
        data.uid = action.payload.id;
        return data
      }
    }));
  }

  // addUser(uid): void {
  //   this.db.collection('user').doc(`${uid}`).set({uid: uid})
    
  // }
  addUser(user: UserI): void {
    let uid = user.uid;
    this.db.collection('user').doc(`${uid}`).set(user);
  }

  updateUser(user: UserI): void {
    let uidUser = user.uid;
    this.userDoc = this.db.doc<UserI>(`user/${uidUser}`);
    this.userDoc.update(user);
  }

  sendAcomp(acomp: acompI, userId: string): void {
    this.db.collection('user').doc(userId).update({ comp: firestore.FieldValue.arrayUnion(acomp) });
  }
  //Para eliminar, filtro el array en misdatospage
  deleteAcomp(newAcomp, userId: string): void {
    this.db.collection('user').doc(userId).update({ comp: newAcomp });
  }
  sendAuto(auto: autoI, userId: string): void {
    this.db.collection('user').doc(userId).update({ auto: firestore.FieldValue.arrayUnion(auto) });
  }
  deleteAuto(newAuto, userId: string): void {
    this.db.collection('user').doc(userId).update({ auto: newAuto });
  }

  async updatePhoto(uid) {
    console.log(uid);

    try {
      const options: CameraOptions = {
        quality: 50,
        targetHeight: 600,
        targetWidth: 600,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
      const result = await this.camera.getPicture(options);
      const filePath = `pictures/${uid}`;
      const image = `data:image/jpeg;base64,${result}`;

      const pictures = storage().ref(filePath);
      const task = pictures.putString(image, 'data_url');
      pictures.getDownloadURL().then((dat) => {
        const downloadURL = dat;
        this.db.collection('user').doc(uid).update({ fotodni: downloadURL });

      }).finally();

    } catch (e) {
      console.error(e);

    }
  }

}

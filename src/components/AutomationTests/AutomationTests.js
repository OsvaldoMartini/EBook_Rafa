import React , { Component } from 'react';
import PropTypes from 'prop-types';

class AutomationTests extends Component{
    constructor(){
        super();
        this.state = {
            src: '',
            value: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.inputFileChanged = this.inputFileChanged.bind(this);
    };
    handleClick(){
        let input = this.refs.input_reader;
        input.click();
    };
    handleselectedFile = event => {
        this.setState({
          selectedFile: event.target.files[0],
          loaded: 0
        });
      };
    inputFileChanged(e){
        if(window.FileReader){
            let file = e.target.files[0], reader = new FileReader(), self = this;
            reader.onload = function(r){
                self.setState({
                    src: r.target.result
                });
            }
            reader.readAsDataURL(file);
            self.setState({value:reader});
        }
        else {
            alert('Soryy, your browser does\'nt support for preview');
        }
    }

    openFile(event) {
        let input = event.target;
  
        let reader = new FileReader();
        reader.onload = function() {
          let text = reader.result;
          console.log(reader.result.substring(0));
  
        };
        reader.readAsText(input.files[0]);
      }

      
    showFile = () => {
        if (window.File && window.FileReader && window.FileList && window.Blob) {
             var preview = document.getElementById('show-text');
             var file = document.querySelector('input[type=file]').files[0];
             var reader = new FileReader()
    
             var textFile = /text.*/;
    
             if (file.type.match(textFile)) {
                reader.onload = function (event) {
                   var dataObj = event.target.result.split('\n\n').map(entry => {
                        const obj = {};
                        entry.split('\n').forEach(keyValue => {
                            const split = keyValue.split(":");
                            const keyFather = split[0];
                            const values = split[1];
                            const objChild = {};
                            if (keyFather){
                                if (typeof keyFather !== "undefined" && typeof values !== "undefined") { 
                                    values.split(',').forEach(keyValueChild => {
                                        const splitChild = keyValueChild.split("=");
                                        const keyChild = splitChild[0];
                                        const valueChild = splitChild[1];
                                        objChild[keyChild] = valueChild;
                                    });
                                    obj[keyFather] = objChild;
                                    //console.log(keyFather)
                                    //console.log(obj[keyFather])
                                }else{
                                    obj["Structural Error"] = keyFather;
                                }
                            }
                        });
                        
                        return obj;
                      });

                   console.log(dataObj);
                   preview.innerHTML = dataObj;
                }
             } else {
                preview.innerHTML = "<span class='error'>It doesn't seem to be a text file!</span>";
             }
             reader.readAsText(file);
    
       } else {
          alert("Your browser is too old to support HTML5 File API");
       }
      }

    render(){
        const { accept, capture, multiple } = this.props, { src, value } = this.state;
        const data = `Title: Blazing Saddles
        Release Year: 1974
        Format: VHS
        Stars: Mel Brooks, Clevon Little, Harvey Korman, Gene Wilder, Slim Pickens, Madeline Kahn
        
        Title: Casablanca
        Release Year: 1942
        Format: DVD
        Stars: Humphrey Bogart, Ingrid Bergman, Claude Rains, Peter Lorre
        
        Title: Charade
        Release Year: 1953
        Format: DVD
        Stars: Audrey Hepburn, Cary Grant, Walter Matthau, James Coburn, George Kennedy
        
        Title: Cool Hand Luke
        Release Year: 1967
        Format: VHS
        Stars: Paul Newman, George Kennedy, Strother Martin`

        var dataObj = data.split('\n\n').map(entry => {
            const obj = {}
            entry.split('\n').forEach(keyValue => {
              const split = keyValue.split(": ")
              const key = split[0]
              const value = split[1]
              obj[key] = key === "Stars" ? value.split(", ") : value
            })
            return obj
          });
          console.log(dataObj);

        // return(
        //     <div>
        //         <img src={src} height={80} width={80}/>
        //         <button onClick={this.handleClick}>Upload</button>
        //         <input type="file" ref="input_reader" accept={Array.isArray(accept) ? accept.join(',') : accept} multiple={multiple} capture={capture} style={{display:'none'}} onChange={this.inputFileChanged}/>
        //     </div>
        // );
        return (
            <div>
              <input type="file" onChange={this.showFile} />
              <div id="show-text">Choose text File</div>
            </div>
          );
        //   return (
              
        //     <div className="import-film container">
        //       <div className="import-form">
        //         <h3>Choose file to import</h3>
        //         <input
        //           type="file"
        //           name=""
        //           id=""
        //           onChange={event => this.openFile(event)}
        //         />
        //         <button onClick={this.handleUpload}>Upload</button>
        //       </div>
        //     </div>
        //   );
    }
}
AutomationTests.defaultProps = {
    accept: 'image/*',
    capture: true,
    multiple: false
}
AutomationTests.propTypes = {
    accept: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    capture: PropTypes.bool,
    multiple: PropTypes.bool
}
export default AutomationTests;